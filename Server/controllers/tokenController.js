const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "7d"
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

const decodedToken = async (token) => {
  console.log("token ::", token);

  try {
    return await jwt.verify(token, "mySecretKey");
  } catch (error) {
    return error;
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  decodedToken
};
