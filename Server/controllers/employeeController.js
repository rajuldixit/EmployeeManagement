const { decodedToken } = require("./tokenController");
const jwt = require("jsonwebtoken");

let employees = [];
// @desc POST User Login
// @route POST /
// @access Private
const onboarding = async (req, res) => {
  const employeeDetails = req.body.employee;
  console.log(
    "emp ::",
    employees.find((e) => e.email === employeeDetails.email)
  );
  const findExistingEmployee =
    employees.length > 0
      ? employees.find((e) => e.email === employeeDetails.email)
      : employees.push(employeeDetails);

  console.log("finding :", findExistingEmployee, employees);
  if (findExistingEmployee) {
    res.status(200).send("employee exists");
  } else {
    res.status(200).send("employee saved");
  }
};

module.exports = {
  onboarding
};
