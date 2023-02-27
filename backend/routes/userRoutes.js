import express from "express";
import { registerUser, authUser, allUsers } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// routes. Controllers like registerUser & allUsers is in userControllers.js
router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser);

export default router;