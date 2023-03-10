import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removefromGroup,
  addToGroup
} from "../controllers/chatControllers.js";

const router = express.Router();

// routes for accessing or creating chats
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route('/groupremove').put(protect, removefromGroup);
router.route('/groupadd').put(protect, addToGroup);

export default router;
