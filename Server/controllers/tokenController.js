const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "5s"
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
