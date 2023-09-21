const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
  	
    name: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    isAdmin: { type: Boolean, require: false, default: false },
  },
  { timestamps: true , _id : false }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
