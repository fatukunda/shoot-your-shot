/* eslint-disable import/prefer-default-export */
const getTotalLikes = arr => Object.values(
  arr.reduce((acc, { username, likes }) => {
    acc[username] = username in acc
      ? { username, totalLikes: acc[username].totalLikes + likes }
      : { username, totalLikes: likes };
    return acc;
  }, {}),
);
export {
  getTotalLikes,
};
