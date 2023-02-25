import mongoose from "mongoose";

const messageModel = mongoose.Schema(
	{
		sender:{
			type: mongoose.Schema.Types.ObjectId, 
			ref: "User"
		},
		contenet:{type: String, trim: true},
		chat:{
			type: mongoose.Schema.Types.ObjectId, 
			ref: "Message"
		},
	},
	{
		timestamps: true,
	}
);

const Message = mongoose.model("Message", messageModel);

export default Message;

// name/id of sender
// content of message
// time message was sent *maybe later
// reference to chat it was sent to