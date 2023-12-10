const express = require("express");
const { userLogout } = require("../controllers/userController");
const router = express.Router();

router.route("/").post(userLogout);

module.exports = router;
