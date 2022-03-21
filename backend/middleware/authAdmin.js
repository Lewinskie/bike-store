const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authAdmin = async (req, res, next) => {
  try {
    //GET USER INFOR BY ID
    const user = await User.findById({ _id: req.user.id });

    //CHECK USER ROLE IF ITS 0/1
    if (user.role === 0)
      return res.status(400).json({ msg: "Admin resources access denied!" });

    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = authAdmin;
