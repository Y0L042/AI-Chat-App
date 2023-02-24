import express from "express";
import chats from "./data/data.js";
import dotenv from 'dotenv';

//--- App Config
const app = express();
dotenv.config();

//--- Middlewares


//--- DB config


//--- API endpoints
app.get('/', (req, res) => {
	res.send("API is running"); //This sends an HTTP response back to the client
});

app.get('/api/chat', (req, res) => {
	// res.send(chats);
});  

app.get('/api/chat/:id', (req, res) => {
	// console.log(req.params);
	const singleChat = chats.find((chat) => chat._id === req.params.id);
	console.log(singleChat);
	res.send(singleChat);
});


const PORT = process.env.PORT || 5000; // .env variable PORT not working
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

