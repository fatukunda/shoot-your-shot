/* eslint-disable import/prefer-default-export */
const getTotalLikes = arr => Object.values(
  arr.reduce((acc, { username, likes }) => {
    acc[username] = username in acc
      ? {
        username,
        totalLikes: acc[username].totalLikes + likes,
        numberOfShots: acc[username].numberOfShots + 1,
      }
      : { username, totalLikes: likes, numberOfShots: 1 };
    return acc;
  }, {}),
);
export {
  getTotalLikes,
};
