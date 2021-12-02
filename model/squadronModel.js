const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const squadronModels = new mongoose.Schema({
  squadronName: {
    type: String,
    required: true,
  }, 
  baseId: {
    type: ObjectId,
    default: "baseTable",
  },
  createdBy: {
    type: ObjectId,
    ref: "userTable",
  },
  wingId: {
    type: ObjectId,
    ref: "wingTable",
  },
});

const squadronModel = mongoose.model("squadronTable", squadronModels);
module.exports = squadronModel;
