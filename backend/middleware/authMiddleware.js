import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from "express-async-handler";


// added before route in userRoutes.js
export const protect = asyncHandler(async(req, res, next) => {
	let token;
	// in our request, we will send the token in the header
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	){
		try {
			//take token
			token = req.headers.authorization.split(" ")[1];

			// decodes token id, verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select("-password"); // find and return user without returning the password

			next();
		} catch (error) {
			res.status(401);
			throw new Error("Not authorized, token failed");
		}
	}
	
	if (!token){
		res.status(401);
		throw new Error("Not authorized, no token");		
	}
});