const express = require("express");
const userRoute = require("./router/userRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const BaseRoute = require("./router/baseRouter");
const WingRoute = require("./router/wingRouter");
const SquadronRoute = require("./router/squadronRouter");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoute);
app.use("/base", BaseRoute);
app.use("/wing", WingRoute);
app.use("/squadron", SquadronRoute);

module.exports = app;
