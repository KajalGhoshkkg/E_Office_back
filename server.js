const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.port || 8000;
const db = process.env.db;

mongoose
  .connect(db)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log("error connecting db", err);
  }); 

app.listen(port, () => {
  console.log("app is running on port: ", port);
});