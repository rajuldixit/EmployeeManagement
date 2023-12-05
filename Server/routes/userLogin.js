const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

const users = [
  {
    id: 1,
    email: "admin@gmail.com",
    username: "admin",
    role: "admin",
    password: "$2b$10$J6adca0BQ4i76BsthXZ95.ymejaha/AaOaDknOY7YOSbaMHvKz2Rm"
  }
];

const initializePassport = require("../passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

module.exports = router;
