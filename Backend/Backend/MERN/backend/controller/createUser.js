const User = require("../models/User");
const jwt = require("jsonwebtoken");
exports.signup = async(req,res)=>{
  try{
    const {name,email,password} = req.body;
    const ress = await User.find({email});
    if(ress.success){
      return res.status(400).json({
        success:false,
        message:"User already Exists"
      })
    }
    const response = await User.create({
      name:name,
      email:email,
      password:password,
    })

    return res.status(200).json({
      success:true,
      message:"true"
    })
  }
  catch(err){
    return res.status(400).json({
      success:false,
      message:err.message
    })
  }
}



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, "somu", {
      expiresIn: "20h",
    });

    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Cookie created successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Login error",
    });
  }
};
