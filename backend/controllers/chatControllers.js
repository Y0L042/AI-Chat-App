import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import User from "../models/userModel.js";

// creating or requesting one-on-one chats
export const accessChat = asyncHandler(async(req, res) => {
	const { userId } = req.body;

	if (!userId) {
		console.log("UserID param not sent with request");
		return res.sendStatus(400);
	}

	var isChat = await Chat.find({
		isGroupChat: false,
		$and:[
			{ users: { $elemMatch: { $eq: req.user._id }}},
			{ users: { $elemMatch: { $eq: userId }}},
		],
	}).populate('users', '-password')
	.populate('latestMessage');

	isChat = await User.populate(isChat, {
		path: 'latestMessage.sender',
		selelect: 'name picture email',
	});

	// if chat exists, else create chat
	if (isChat.length > 0){
		res.send(isChat[0]);
	} else {
		var chatData = {
			chatName: "sender",
			isGroupChat: false,
			users: [req.user._id, userId],
		};

		try {
			const createdChat = await Chat.create(chatData);

			const FullChat = await Chat.findOne({_id: createdChat._id})
			.populate('users', '-password');

			res.status(200).send(FullChat);
		} catch (error) {
			res.status(400);
			throw new Error(error.message);
		}
	}
});