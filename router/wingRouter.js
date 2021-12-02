const express = require("express");
const {
  wingCreation,
  getWingDetails,
  deleteWing,
  updateWingDetails,
} = require("../controller/wingController");
const { protect, restrictedTo } = require("../controller/userController");

const WingRoute = express.Router();

WingRoute.post(
  "/createwing",
  protect,
  // restrictedTo("superadmin"),
  wingCreation
);
WingRoute.get(
  "/getwingdetails",
  protect,
  // restrictedTo("superadmin"),
  getWingDetails
);
WingRoute.delete(
  "/deletewing/:id",
  protect,
  // restrictedTo("superadmin"),
  deleteWing
);
WingRoute.patch(
  "/updatewingdetails/:id",
  protect,
  // restrictedTo("superadmin"),
  updateWingDetails
);

module.exports = WingRoute;
