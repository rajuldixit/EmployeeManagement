const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide username"]
    },
    email: {
      type: String,
      required: [true, "Please provide emails"]
    },
    firstName: {
      type: String,
      required: [true, "Please provide firstname"]
    },
    lastName: {
      type: String,
      required: [true, "Please provide lastname"]
    },
    role: {
      type: String,
      required: [true, "Please provide role"]
    },
    emailVerified: {
      type: Boolean,
      required: [true, "Please provide email verification status"]
    },
    isOnboarded: {
      type: Boolean,
      required: [true, "Please provide onboarding status"]
    },
    password: {
      type: String,
      required: [true, "Please provide password"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
