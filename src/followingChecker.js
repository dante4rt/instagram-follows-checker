const { readFollowingData, readFollowersData } = require('./dataUtils');
const { log, checkAndWriteToFile } = require('./logger');

const followingData = readFollowingData();
const followersData = readFollowersData();

const followingBack = new Set();
const notFollowingBack = new Set();

const checkFollowing = async () => {
  try {
    log('Please wait...', 'cyan');

    followingData.relationships_following.forEach((followingEntry) => {
      const following = followingEntry.string_list_data[0].href;
      const followingUsername = following.split('/').at(-1);

      let isFollowingBack = false;

      for (let j = 0; j < followersData.length; j++) {
        const followers = followersData[j].string_list_data[0].href;
        if (following === followers) {
          log(`${followingUsername} is following you!`, 'green');
          followingBack.add(followingUsername);
          isFollowingBack = true;
          break;
        }
      }

      if (!isFollowingBack) {
        notFollowingBack.add(following);
      }
    });

    log('');
    log('==========================================', 'yellow');
    log('');

    if (notFollowingBack.size > 0) {
      log('People who are NOT following you back:', 'red');
      [...notFollowingBack].forEach((url) => {
        log(`- ${url}`, 'red');
      });
      console.log('');
      const notFollowingBackList = [...notFollowingBack]
        .map((url) => `https://www.instagram.com/${url}`)
        .join('\n');
      checkAndWriteToFile('notFollowingBack.txt', notFollowingBackList);
    } else {
      log('All people are following you back!', 'green');
    }

    const followingBackList = [...followingBack]
      .map((username) => `https://www.instagram.com/${username}`)
      .join('\n');
    checkAndWriteToFile('followingBack.txt', followingBackList);
  } catch (error) {
    log('Error in IIFE: ' + error.message, 'red');
  }
};

module.exports = { checkFollowing };
