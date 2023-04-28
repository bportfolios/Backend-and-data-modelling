const dentistModel = require("../models/dentistModel");
const userModel = require("../models/userModel");
const appointmentModel = require("../models/appointmentModel");

const changeAccountStatusController = async (req, res) => {
  try {
    const { dentistId, status } = req.body;
    const dentist = await dentistModel.findByIdAndUpdate(dentistId, { status });
    const user = await userModel.findOne({ _id: dentist.userId });
    const notification = user.notification;
    notification.push({
      type: "dentist-account-request-updated",
      message: `Your Dentist Account Request Has ${status} `,
      onClickPath: "/notification",
    });
    user.isDentist = true;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: dentist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Account Status",
      error,
    });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const users = await userModel.find({});
      res.status(200).send({
        success: true,
        message: "users data list",
        data: users,
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
      message: "erorr while fetching users",
      error,
    });
  }
};



module.exports = {
  getAllUsersController,
  changeAccountStatusController,
};
