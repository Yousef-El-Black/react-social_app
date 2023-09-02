import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimeline,
  getUserIsPosts,
  likePost,
  updatePost,
} from "../../controllers/post.controller";

const postRoutes: Router = Router();

// Create
postRoutes.post("/", createPost);

// Like
postRoutes.put("/:postId/like", likePost);

// Update
postRoutes.put("/:postId", updatePost);

// Delete
postRoutes.delete("/:postId", deletePost);

// Get
postRoutes.get("/postId", getPost);

// Get Timeline
postRoutes.get("/timeline/:userId", getTimeline);

// Get User is Posts
postRoutes.get("/profile/:username", getUserIsPosts);

export default postRoutes;
