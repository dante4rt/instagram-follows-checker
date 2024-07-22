const fs = require('fs');
const moment = require('moment');
require('colors');

const log = (message, color = 'white') => {
  console.log(`[${moment().format('HH:mm:ss')}] ${message}`[color]);
};

const checkAndWriteToFile = (filename, data) => {
  try {
    let existingData = '';
    if (fs.existsSync(filename)) {
      existingData = fs.readFileSync(filename, 'utf-8');
    }

    const newLines = data.split('\n');
    const existingLines = existingData.split('\n');

    const uniqueNewLines = newLines.filter(
      (line) => !existingLines.includes(line)
    );

    if (uniqueNewLines.length > 0) {
      fs.appendFileSync(filename, uniqueNewLines.join('\n') + '\n', 'utf-8');
      log(`Results have been updated in ${filename}`, 'green');
    } else {
      log(`No new data to write in ${filename}`, 'cyan');
    }
  } catch (error) {
    log('Error writing to file: ' + error.message, 'red');
  }
};

module.exports = { log, checkAndWriteToFile };
