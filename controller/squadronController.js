const baseModel = require("../model/baseModel");
const squadronModel = require("../model/wingModel");

//for superAdmion to creat wing
exports.SquadronCreation = async (req, res) => {
  console.log(req.body);
  const { squadronName } = req.body;
  const squadronCreateData = await squadronModel.create({
    squadronName: squadronName,
    createdBy: req.user._id,
  });
  if (!squadronCreateData) {
    res.status(200).json({
      msg: "error creating squadron",
    });
  }
  res.status(200).json({
    msg: "squadron Creation data subitted successfully",
    squadronCreateData,
  });
};

//for superAdmin to delete a squadron
exports.deleteSquadron = async (req, res) => {
  const delete_data = await squadronModel.findByIdAndDelete(req.params.id);
  if (!delete_data) {
    res.status(200).json({
      msg: "error deleting squadron data!!!!",
    });
  }
  res.status(200).json({
    msg: "squadron details deletes!!!!",
  });
};

//for superAdmin to get base details
exports.getSquadronDetails = async (req, res) => {
  const squadronData = await squadronModel.find(); //{baseId:req.user._id}
  if (!squadronData) {
    return res.status(200).json({
      message: "no squadron found",
      squadronData,
    });
  }
  res.status(200).json({
    message: "received squadron data from db",
    squadronData,
  });
};

//for superAdmin to update squadron Details
exports.updateSquadronDetails = async (req, res) => {
  const { SquadronName } = req.body;
  const id = req.params.id;
  const updateSquadronData = await squadronModel.findByIdAndUpdate(
    id,
    {
      squadronName: SquadronName,
    },
    { new: true }
  );
  if (!updateSquadronData) {
    return res.status(200).json({
      msg: "updating area should not be empty",
    });
  }
  res.status(200).json({
    msg: "squadron data updated successfully",
    updateSquadronData,
  });
};
