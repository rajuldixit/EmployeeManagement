const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
const users = [
  {
    id: "1",
    firstname: "admin",
    lastname: "admin",
    username: "admin",
    email: "admin@gmail.com",
    password: "$2b$10$J6adca0BQ4i76BsthXZ95.ymejaha/AaOaDknOY7YOSbaMHvKz2Rm",
    isAdmin: true,
    role: "ADMIN"
  },
  {
    id: "2",
    firstname: "emp",
    lastname: "emp",
    username: "employee",
    email: "employee@gmail.com",
    password: "$2b$10$J6adca0BQ4i76BsthXZ95.ymejaha/AaOaDknOY7YOSbaMHvKz2Rm",
    isAdmin: false,
    role: "EMPLOYEE"
  }
];

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "5s"
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

// @desc POST User Login
// @route POST /
// @access Private
const userLogin = async (req, res) => {
  console.log("req =============", req.body);
  const { email, password } = req.body;
  const user = users.find((u) => {
    return u.email === email;
  });
  console.log("user", req.body);
  if (user == null) {
    return res.status(404).json("No user with that email");
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      res.status(200).json({
        user: user,
        accessToken,
        refreshToken
      });
    } else {
      return res.status(400).json("Username or password incorrect!");
    }
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

// @desc POST User Login
// @route POST /
// @access Private
const userLogout = asyncHandler(async (req, res) => {});

module.exports = {
  userLogin,
  userLogout
};
