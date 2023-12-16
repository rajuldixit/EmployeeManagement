const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");

const dotenv = require("dotenv").config();

const employee = require("./routes/employee");
const userAuth = require("./routes/userAuth");

const app = express();

app.set("view-engine", "ejs");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", userAuth);
app.use("/employee", employee);

// app.use("/login", userLogin);
// app.use("/logout", verify, userLogout);

module.exports = app;
