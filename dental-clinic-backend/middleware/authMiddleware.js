const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_TOKEN, async (err, decode) => {
      if (err) {
        return res
          .status(200)
          .send({ message: "Error in auth", success: false });
      } else {
        req.body.userId = decode.id;
        req.user = await userModel.findById(decode.id);
        console.log(req.user._id);
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth Failed", success: false });
  }
};
