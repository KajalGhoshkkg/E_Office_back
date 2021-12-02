const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const baseModels = new mongoose.Schema({
  baseName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: ObjectId,
    ref: "userTable",
  },
});

const baseModel = mongoose.model("baseTable", baseModels);
module.exports = baseModel;
