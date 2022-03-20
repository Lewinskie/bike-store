const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER USER
const register = async (req, res) => {
  try {
    //FIRST CHECK IF USER EXISTS BEFORE CREATING ONE
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ msg: "User already exists, please Log in" });

    //CHECK PASSWORD LENGTH. IT SHOULD BE ATLEAST 6 CHARACTERS
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password should be atleast 6 characters long!" });

    //PASSWORD ENCRYPTION
    const hashedPassword = await bcrypt.hash(password, 10);

    //CREATE NEW USER
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });

    //SAVE THE USER TO MONGODB
    await newUser.save();

    //CREATE ACCESS TOKEN FOR THE USER
    const accesstoken = createAccessToken({ id: newUser._id });
    // res.json(accesstoken);

    //CREATE COOKIE THAT WILL WILL BE SENT VIA THE HEADERS
    res.cookie("accesstoken", accesstoken, {
      httpOnly: true,
      path: "/user/access_token",
    });

    return res.status(201).json({msg:'User created successfully'})
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//LOGIN USER

//createAccessToken FUNCTION
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

exports.register = register;
