const { string } = require("blockly/core/utils");
const mongoose = require("mongoose");

//// new user schema design

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    view: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
