import UserModel from "../models/user.model";
import { Request, Response } from "express";

// Update
export const updateUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.userId, {
      $set: req.body,
    });

    res.status(200).json("User has been Updated!");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get
export const getUser = async (req: Request, res: Response) => {
  try {
    const user: any = await UserModel.findById(req.params.userId);

    !user && res.status(404).json("User not Found!");

    const { password, ...otherDetails } = user._doc;
    res.status(200).json(otherDetails);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users: any = await UserModel.find();
    let data: any = [];
    users.map((user: any) => {
      const { password, ...otherDetails } = user._doc;
      data.push({ ...otherDetails });
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Follow
export const followUser = async (req: Request, res: Response) => {
  if (req.body.userId !== req.params.userId) {
    try {
      const user: any = await UserModel.findById(req.params.userId);
      const currentUser: any = await UserModel.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({
          $push: { followings: req.params.userId },
        });
        res.status(200).json("Followed!");
      } else {
        res.status(403).json("You already follow this user!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can't follow Yourself!");
  }
};

// Unfollow
export const unfollowUser = async (req: Request, res: Response) => {
  if (req.body.userId !== req.params.userId) {
    try {
      const user: any = await UserModel.findById(req.params.userId);
      const currentUser: any = await UserModel.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({
          $pull: { followings: req.params.userId },
        });
        res.status(200).json("Unfollowed!");
      } else {
        res.status(403).json("You already unfollow this user!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can't unfollow Yourself!");
  }
};

// Get User by Username
export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Friends
export const getAllFriends = async (req: Request, res: Response) => {
  try {
    const user: any = await UserModel.findById(req.params.userId);
    const friendsId = await user.followers.filter((follower: any) => {
      return user.followings.includes(follower);
    });
    const friends = await Promise.all(
      friendsId.map((friendId: string) => {
        return UserModel.findById(friendId);
      })
    );
    res.status(200).json(friends);
  } catch (err) {
    res.status(500).json(err);
  }
};
