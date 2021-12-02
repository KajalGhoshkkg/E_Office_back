const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const userModels = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    require: true,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
    },
  },
  baseId: {
    type: ObjectId,
    ref: "baseTable",
    default: null,
  },
  createdBy: {
    type: ObjectId,
    ref: "userTable",
  },
  role: {
    type: String,
    enum: ["superadmin", "admin", "user", "wing", "squadron"],
    default: "user",
  },
  squadronId: {
    type: String,
    ref:"squadronTable",
    default: null,
  },
  wingId: {
    type: String,
    ref:"wingTable",
    default: null,
  },
});

userModels.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // this.password = await bcrypt.hash(this.password,12)
  this.confirmPassword = undefined;
  next();
});

// userSchema.methods.check=async function(currentPassword,userPassword){
//   return await bcrypt.compare(currentPassword,userPassword)
// }

const userModel = mongoose.model("userTable", userModels);
module.exports = userModel;
