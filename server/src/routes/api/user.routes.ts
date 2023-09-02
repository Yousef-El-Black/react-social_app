import { Router } from "express";
import {
  deleteUser,
  followUser,
  getAllFriends,
  getAllUsers,
  getUser,
  getUserByUsername,
  unfollowUser,
  updateUser,
} from "../../controllers/user.controller";
import { verifyUser } from "../../middlewares/verify.middleware";

const userRoutes: Router = Router();

// Update User
userRoutes.put("/:userId", verifyUser, updateUser);

// Delete User
userRoutes.delete("/:userId", verifyUser, deleteUser);

// Get User
userRoutes.get("/:userId", getUser);

// Get User by Username
userRoutes.get("/profile/:username", getUserByUsername);

// Get All Users
userRoutes.get("/", getAllUsers);

// Follow
userRoutes.post("/:userId/follow", verifyUser, followUser);

// Unfollow
userRoutes.post("/:userId/unfollow", verifyUser, unfollowUser);

// Get Friends
userRoutes.get("/friends/:userId", getAllFriends);

export default userRoutes;
