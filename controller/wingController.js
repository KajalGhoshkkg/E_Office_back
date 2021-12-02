const wingModel = require("../model/wingModel");

//for superAdmion to creat wing
exports.wingCreation = async (req, res) => {
  const { wingName } = req.body;
  const wingCreateData = await wingModel.create({
    wingName: wingName,
    createdBy: req.user._id, 
  });
  if (!wingCreateData) {
    return res.status(200).json({
      msg: "error creating wing",
      wingCreateData,
    });
  }
  res.status(200).json({
    msg: "wing Creation data subitted successfully",
    wingCreateData,
  });
};


//for superAdmin to delete a wing
exports.deleteWing = async (req, res) => {
  const delete_data = await wingModel.findByIdAndDelete(req.params.id);
  if (!delete_data) {
    res.status(200).json({
      msg: "error deleting wing details!!!!",
    });
  }
  res.status(200).json({
    msg: "wing details deleted!!!!",
  });
};


//for superAdmin to get wing details
exports.getWingDetails = async (req, res) => {
  const wingData = await wingModel.find(); //{baseId:req.user._id}
  res.status(200).json({
    message: "received wing details from db",
    wingData,
  });
};


//for superAdmin to update wingDetails
exports.updateWingDetails = async (req, res) => {
  const { wingName } = req.body;
  const id = req.params.id;
  const updateWingData = await wingModel.findByIdAndUpdate(
    id,
    {
      wingName: wingName,
    },
    { new: true }
  );
  if (!updateWingData) {
    return res.status(200).json({
      msg: "updating area should not be empty",
    });
  }
  res.status(200).json({
    msg: "wing details updated successfully",
    updateWingData,
  });
};
