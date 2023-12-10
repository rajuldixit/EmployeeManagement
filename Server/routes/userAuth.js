const express = require("express");
const router = express.Router();
const { userLogin, userLogout } = require("../controllers/userController");
const { verify } = require("../middleware/authentication");

router.route("/login").post(userLogin);
router.route("/logout", verify).post(userLogout);

module.exports = router;
