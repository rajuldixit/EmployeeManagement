const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const {
  checkNotAuthenticated,
  checkAuthenticated
} = require("./middleware/authentication");

const dotenv = require("dotenv").config();

const indexRouter = require("./routes/index");
const userLogin = require("./routes/userLogin");
const userLogout = require("./routes/userLogout");

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.username });
});
// app.get("/", checkAuthenticated, (req, res) => {
//   res.send("<h1>Success</h1>");
// });
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.use("/login", checkNotAuthenticated, userLogin);
app.use("/logout", userLogout);

module.exports = app;
