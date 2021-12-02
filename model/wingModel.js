const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const wingModels = new mongoose.Schema({
  wingName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: ObjectId,
    ref: "userTable",
  },
});

const wingModel = mongoose.model("wingTable", wingModels);
module.exports = wingModel;
