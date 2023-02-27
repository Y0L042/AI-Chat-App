import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Superfluous
import colors from "colors";

//--- App Config
dotenv.config();
connectDb();
const app = express();
app.use(express.json()); // to accept JSON data
//--- Middlewares

//--- DB config

//--- API endpoints

// endpoints gets called in sequence

app.get("/", (req, res) => {
  res.send("API is running"); //This sends an HTTP response back to the client
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error handling middleware
app.use(notFound); // handles not found errors
app.use(errorHandler); // catches all other error codes

const PORT = process.env.PORT || 5000; // .env variable PORT not working
app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));
