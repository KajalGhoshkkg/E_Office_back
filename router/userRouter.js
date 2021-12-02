const express = require("express");
const {
  signup,
  login,
  deleteUsers,
  updateUserNameDetails,
  updateUserPasswordDetails,
  authCheck,
  logout,
  getUserDetails,
} = require("../controller/userController");

const { protect, restrictedTo } = require("../controller/userController");

const UserRoute = express.Router();

UserRoute.post("/signup", signup);
UserRoute.post("/login", login);
UserRoute.get('/userdetails',getUserDetails)
UserRoute.post("/logout", logout);
// UserRoute.post("/protect", protect);
UserRoute.delete(
  "/deleteuser/:id",
  protect,
  // restrictedTo("superadmin"),
  deleteUsers
);
UserRoute.patch(
  "/updateusername/:id",
  protect,
  // restrictedTo("superadmin"),
  updateUserNameDetails
);
UserRoute.patch(
  "/updateuserpassword/:id",
  protect,
  // restrictedTo("superadmin"),
  updateUserPasswordDetails
);
// UserRoute.get("/authCheck",protect,authCheck)

module.exports = UserRoute;
