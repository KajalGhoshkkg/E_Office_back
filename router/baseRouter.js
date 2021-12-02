const express = require("express");
const {
  baseCreation,
  getBaseDetails,
  deleteBase,
  updateBaseDetails,
} = require("../controller/baseController");

const { protect, restrictedTo } = require("../controller/userController");

const BaseRoute = express.Router();

BaseRoute.post(
  "/createbase",
  protect,
  // restrictedTo("superadmin"),
  baseCreation
);
BaseRoute.get(
  "/getbasedetails",
  protect,
  // restrictedTo("superadmin"),
  getBaseDetails
);
BaseRoute.delete(
  "/deletebase/:id",
  protect,
  // restrictedTo("superadmin"),
  deleteBase
);
BaseRoute.patch(
  "/updatebasedetails/:id",
  protect,
  // restrictedTo("superadmin"),
  updateBaseDetails
);

module.exports = BaseRoute;
