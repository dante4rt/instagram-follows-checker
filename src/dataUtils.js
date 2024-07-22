const fs = require('fs');
const path = require('path');

const directoryPath = './';

const readFollowingData = () =>
  JSON.parse(fs.readFileSync('./following.json', 'utf-8'));

const readFollowersData = () => {
  return fs
    .readdirSync(directoryPath)
    .filter((file) => file.startsWith('followers_') && file.endsWith('.json'))
    .reduce(
      (acc, file) =>
        acc.concat(
          JSON.parse(fs.readFileSync(path.join(directoryPath, file), 'utf-8'))
        ),
      []
    );
};

module.exports = { readFollowingData, readFollowersData };
