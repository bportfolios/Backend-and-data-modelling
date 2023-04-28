const dentistModel = require("../models/dentistModel");

const getAllDentistsController = async (req, res) => {
  try {
    const dentists = await dentistModel.find({});
    res.status(200).send({
      success: true,
      message: "Dentists list",
      data: dentists,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting dentists data",
      error,
    });
  }
};
const getDentistByIdController = async (req, res) => {
  try {
    const dentist = await dentistModel.findOne({ _id: req.params.dentistId });
    res.status(200).send({
      success: true,
      message: "Single Doc dentist Fetched",
      data: dentist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single dentist info",
    });
  }
};

// update doc profile
const updateDentistProfileController = async (req, res) => {
  try {
    if (req.user.isAdmin || req.user.isDentist) {
      const dentist = await dentistModel.findOneAndUpdate(
        { _id: req.params.dentistId },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "Dentist Profile Updated",
        data: dentist,
      });
    } else {
      res.status(401).send({
        success: false,
        message: `Unauthorized user - ${req.user.name}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Dentist Profile Update issue",
      error,
    });
  }
};

const deleteDentistByIdController = async (req, res) => {
  try {
    if (req.user.isAdmin || req.user.isDentist) {
      const dentist = await dentistModel.findByIdAndDelete({
        _id: req.params.dentistId,
      });
      res.status(200).send({
        success: true,
        message: "Single Doc dentist Fetched",
        data: dentist,
      });
    } else {
      res.status(401).send({
        success: false,
        message: `Unauthorized user - ${req.user.name}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single dentist info",
    });
  }
};
module.exports = {
  getAllDentistsController,
  getDentistByIdController,
  updateDentistProfileController,
  deleteDentistByIdController,
};
