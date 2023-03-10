import asyncHandler from 'express-async-handler';
import generateToken from '../config/generateToken.js';
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password, picture } = req.body;

	if (!name || !email || !password){
		res.status(400);
		throw new Error("Please enter all fields ");
	}

	const userExists = await User.findOne({email});
	if (userExists){
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await User.create({
		name,
		email,
		password,
		picture
	});

	if (user){
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			picture: user.picture,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Failed to create user");
	}
});

//  /api/user?search=user - a method for searching for users
export const allUsers = asyncHandler(async(req, res) => {
	// take request from query
	// if query, search mongodb documents. else do nothing
	// TODO remove email search
	const keyword = req.query.search ? {
		$or: [
			{ name: { $regex: req.query.search, $options: "i"}},
			{ email: { $regex: req.query.search, $options: "i"}},
		]
	} : {};
	
	// search for every other user except the user that is currently logged in
	// needs json web token to get logged in user see ./middleware/auth
	const users = await User.find(keyword).find({_id: {$ne: req.user._id}});
	res.send(users);
});


// authenticates the user (logs them in)
export const authUser = asyncHandler(async(req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	// if username & password matches database
	if (user && (await user.matchPassword(password))){
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			picture: user.picture,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}

});

// export default { registerUser };