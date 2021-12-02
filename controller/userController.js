const userModel = require("../model/userModel");

const jwt = require("jsonwebtoken");

const token = (id) => {
  return jwt.sign({ id }, process.env.key, { expiresIn: process.env.exp });
};

//for sign-up purpose
exports.signup = async (req, res) => {
  // console.log(req.body);
  const { userName, password, confirmPassword } = req.body;
  if (!userName || !password || !confirmPassword) {
    res.status(200).json({
      msg: "all the fields are required",
    });
  }
  if (password.length < 8) {
    res.status(200).json({
      msg: "password must be of atleast 8 charecter or above",
    });
  }
  if (password !== confirmPassword) {
    res.status(200).json({
      msg: "password and confirmPassword mismatch",
    });
  }
  const signupData = await userModel.create({
    userName: userName,
    password: password,
    confirmPassword: confirmPassword,
  });
  res.status(200).json({
    msg: "signup data subitted successfully",
    signupData,
  });
};

// for log-in purpose
exports.login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(200).json({
      msg: "user name & password are required feilds",
    });
  }
  const user = await userModel.findOne({ userName }).select("+passsword");

  if (!user) {
    return res.status(200).json({
      msg: "user not found",
    });
  }
  // this is what needs when i dont want to use bcrypt
  if (password != user.password) {
    return res.status(200).json({
      msg: "password mismatch",
    });
  }

  const newToken = await token(user._id);
  res
    .status(200)
    .cookie("user_cookie", newToken, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
      httpOnly: true,
    })
    .json({ msg: "successfully logged in", userInfo: user });
};

//for protecting a user only mode
exports.protect = async (req, res, next) => {
  const { user_cookie } = req.cookies;
  if (!user_cookie) {
    return res.status(200).json({
      msg: "need to log-in first",
    });
  }
  const decodeToken = await jwt.verify(user_cookie, process.env.key);
  if (!decodeToken.id) {
    return res.status(200).json({
      msg: "not a valid user",
    });
  }
  const user = await userModel.findById(decodeToken.id); //.select("")
  if (!user) {
    return res.status(200).json({
      msg: "user not found",
    });
  }
  req.user = user;
  next();
};

//for deleting a user by the superAdmin purpose
exports.deleteUsers = async (req, res) => {
  const deleteUser = await userModel.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    return res.status(200).json({
      msg: "user not found",
    });
  }
  res.status(200).json({
    msg: "user deleted successfully",
  });
};

//for superAdmin to get all userData
exports.getUserDetails = async (req, res) => {
  const users = await userModel.find();
  if (!users) {
    return res.status(200).json({
      msg: "no user found",
    });
  }
  res.status(200).json({
    msg: "user data from db",
    users,
  });
};

//for superAdmin to update user
exports.updateUserPasswordDetails = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const id = req.params.id;
  const updateUserData = await userModel.findByIdAndUpdate(
    id,
    {
      password: password,
      confirmPassword: confirmPassword,
    },
    { new: true }
  );
  if (!updateUserData) {
    return res.status(200).json({
      msg: "updating area should not be empty",
    });
  }
  res.status(200).json({
    msg: "user data updated successfully",
    updateUserData,
  });
};

exports.updateUserNameDetails = async (req, res) => {
  const { userName } = req.body;
  const id = req.params.id;
  const updateUserData = await userModel.findByIdAndUpdate(
    id,
    {
      userName: userName,
    },
    { new: true }
  );
  if (!updateUserData) {
    return res.status(200).json({
      msg: "updating area should not be empty",
    });
  }
  res.status(200).json({
    msg: "user data updated successfully",
    updateUserData,
  });
};

//for restricting a perticuler user mode only
exports.restrictedTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(200).json({
        msg: "must be a superAdmin to perform this action",
      });
    }
    next();
  };
};

//for checking purpose whether user is logged in or not
exports.authCheck = async (req, res) => {
  res.status(200).json({
    msg: "logged in",
    userInfo: req.user,
  });
};

//for user to log out purpose
exports.logout = (req, res) => {
  res
    .status(200)
    .cookie("user_cookie", null, { expires: new Date(Date.now()) })
    .json({
      msg: "logged out!!! come back soon!!! we will miss you!!!",
    });
};
