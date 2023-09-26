const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    name: { type: String, required: false },
    email: { type: String, required: false },
    isAdmin:{type:Boolean, required:false, default:false},
    password:{type: String, required: false}
  },
  { timestamps: true  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
