const { onboarding } = require("../controllers/employeeController");
const { verify } = require("../middleware/authentication");

const router = require("express").Router();

router.route("/onboarding", verify).post(onboarding);

module.exports = router;
