const User = require("../models/User");
exports.getUser = async (req, res) => {
	try{
		const response = await User.find({});
		return res.status(200).json({
			success:true,
			response,
		
		})		
	}
	catch(err){

	}
};
