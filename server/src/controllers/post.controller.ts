import { Request, Response } from "express";
import PostModel from "../models/post.model";
import UserModel from "../models/user.model";

// Create
export const createPost = async (req: Request, res: Response) => {
  const newPost = new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post: any = await PostModel.findById(req.params.postId);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated!");
    } else {
      res.status(403).json("You can update only your Posts!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete
export const deletePost = async (req: Request, res: Response) => {
  try {
    await PostModel.findByIdAndDelete(req.params.postId);
    res.status(200).json("Post has been Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Like - Dislike
export const likePost = async (req: Request, res: Response) => {
  try {
    const post: any = await PostModel.findById(req.params.postId);
    if (req.body.userId) {
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked!");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The like has been removed!");
      }
    } else {
      res.status(403).json("Create Account First!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get
export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Timeline
export const getTimeline = async (req: Request, res: Response) => {
  try {
    const currentUser: any = await UserModel.findById(req.params.userId);
    const userPosts = await PostModel.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId: string) => {
        return PostModel.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get User's All Posts
export const getUserIsPosts = async (req: Request, res: Response) => {
  try {
    const user: any = await UserModel.findOne({
      username: req.params.username,
    });
    const posts = await PostModel.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
