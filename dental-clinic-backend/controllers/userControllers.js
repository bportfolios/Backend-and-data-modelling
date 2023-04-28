const userModel = require("../models/userModel");
const dentistModel = require("../models/dentistModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid Email or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login ${error.message}` });
  }
};
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({
      email: req.body.email,
    });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const dentistController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const newDentist = await dentistModel({
        userId: _id,
        ...req.body,
        status: "approved",
      });
      await newDentist.save();
    } else {
      const newDentist = await dentistModel({
        ...req.body,
        userId: req.user._id,
        name: req.user.name,
        email: req.user.email,
        status: "pending",
      });
      await newDentist.save();
      const adminUser = await userModel.findOne({ isAdmin: true });
      const notification = adminUser.notification;
      notification.push({
        type: "create-dentist-request",
        message: `${newDentist.name} has applied For A Dentist Account`,
        data: {
          dentistId: newDentist._id,
          name: newDentist.name,
          onClickPath: "/admin/dentists",
        },
      });
      await userModel.findByIdAndUpdate(adminUser._id, { notification });
      res.status(201).send({
        success: true,
        message: "Dentist Account Applied SUccessfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Cannot create dentist profile",
      success: false,
      error,
    });
  }
};

const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const seennotification = user.seennotification;
    const notification = user.notification;
    seennotification.push(...notification);
    user.notification = [];
    user.seennotification = notification;
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "all notification marked as read",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Cannot get notification",
      success: false,
      error,
    });
  }
};
const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.notification = [];
    user.seennotification = [];
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Notifications Deleted successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "unable to delete all notifications",
      error,
    });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const user = await userModel.findOne({ _id: req.params.userId });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      } else {
        res.status(200).send({
          success: true,
          data: { name: user.name, email: user.email },
        });
      }
    } else {
      res.status(401).send({
        success: false,
        message: `Unauthorized user - ${req.user.name}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "auth error", success: false, error });
  }
};

const updateUserProfileController = async (req, res) => {
  try {
    if (req.user.isAdmin || req.user._id == req.params.userId) {
      const user = await userModel.findOneAndUpdate(
        { _id: req.params.userId },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "User Profile Updated",
        data: user,
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
      message: "User Profile Update issue",
      error,
    });
  }
};
const deleteUserByIdController = async (req, res) => {
  try {
    if (req.user.isAdmin || req.user._id == req.params.userId) {
      const user = await userModel.findByIdAndDelete({
        _id: req.body.userId,
      });
      res.status(201).send({
        success: true,
        message: "user deleted",
        data: user,
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
      message: "error while getting dentists data",
      error,
    });
  }
};
module.exports = {
  loginController,
  registerController,
  dentistController,
  getAllNotificationController,
  deleteAllNotificationController,
  getUserByIdController,
  updateUserProfileController,
  deleteUserByIdController,
};
