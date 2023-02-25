import express from "express";
import chats from "./data/data.js";
import dotenv from 'dotenv';
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Superfluous
import colors from 'colors';

//--- App Config
dotenv.config();
connectDb();
const app = express();
app.use(express.json()); // to accept JSON data
//--- Middlewares


//--- DB config


//--- API endpoints
app.get('/', (req, res) => {
	res.send("API is running"); //This sends an HTTP response back to the client
});

app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 5000; // .env variable PORT not working
app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));

