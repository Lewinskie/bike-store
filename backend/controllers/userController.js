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

    //CREATE COOKIE
    res.cookie("accesstoken", accesstoken, {
      httpOnly: true,
      path: "/user/token",
    });
    return res
      .status(201)
      .json({ msg: "User created successfully", accesstoken });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//LOGIN USER
const login = async (req, res) => {
  try {
    //CHECK IF USER EXISTS
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ msg: "User does not exist, please Register" });
    //CHECK IF PASSWORDS MATCH
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ msg: "Wrong password" });

    //IF SUCCESS, CREATE ACCESS TOKEN
    const accesstoken = createAccessToken({ id: user._id });

    //SET COOKIES
    res.cookie("accesstoken", accesstoken, {
      httpOnly: true,
      path: "/user/token",
    });

    // RETURN WITH USER AND ACCESSTOKEN AND SUCCESS MSG

    return res
      .status(200)
      .json({ msg: "Login success!", user: user, accesstoken: accesstoken });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

// ACCESS TOKEN FUNCTION
const accessToken = (req, res) => {
  try {
    const token = req.cookies.accesstoken;

    // CHECK IF TOKEN IS EXPIRED OR NOT
    if (!token)
      return res
        .status(400)
        .json({ msg: "Invalid Token, please login or Register" });

    //VERIFY TOKEN
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(400)
          .json({ msg: "Invalid token, please Login or Register" });

      //RETURN USER AND TOKEN
      res.json({ user, token });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.accessToken = accessToken;
exports.register = register;
exports.login = login;
