const baseModel = require("../model/baseModel");
const wingModel = require("../model/wingModel");

//for superAdmion to creat base
exports.baseCreation = async (req, res) => {
  console.log(req.body);
  const { baseName } = req.body;
  const baseCreateData = await baseModel.create({
    baseName: baseName,
    createdBy: req.user._id,
  });
  if (!baseCreateData) {
    res.status(200).json({
      msg: "error creating base",
    });
  }
  res.status(200).json({
    msg: "base Creation data subitted successfully",
    baseCreateData,
  });
};

//for superAdmin to delete a base
exports.deleteBase = async (req, res) => {
  const delete_data = await baseModel.findByIdAndDelete(req.params.id);
  if (!delete_data) {
    res.status(200).json({
      msg: "error deleting base data!!!!",
    });
  }
  res.status(200).json({
    msg: "base details deletes!!!!",
  });
};

//for superAdmin to get base details
exports.getBaseDetails = async (req, res) => {
  const baseData = await baseModel.find(); //{baseId:req.user._id}
  if (!baseData) {
    return res.status(200).json({
      message: "no base found",
      baseData,
    });
  }
  res.status(200).json({
    message: "received base data from db",
    baseData,
  });
};

//for superAdmin to update baseDetails
exports.updateBaseDetails = async (req, res) => {
  const { baseName } = req.body;
  const id = req.params.id;
  const updateBaseData = await baseModel.findByIdAndUpdate(
    id,
    {
      baseName: baseName,
    },
    { new: true }
  );
  if (!updateBaseData) {
    return res.status(200).json({
      msg: "updating area should not be empty",
    });
  }
  res.status(200).json({
    msg: "base data updated successfully",
    updateBaseData,
  });
};
