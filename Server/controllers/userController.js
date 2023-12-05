const asyncHandler = require("express-async-handler");

// @desc POST User Login
// @route POST /
// @access Private
const userLogin = asyncHandler(async (req, res) => {
  console.log("-------------------//------------------");
  res.send("<html>my html code</html>");
});

// @desc POST User Login
// @route POST /
// @access Private
const userProfileUpdate = asyncHandler(async (req, res) => {});

module.exports = {
  userLogin,
  userProfileUpdate
};
