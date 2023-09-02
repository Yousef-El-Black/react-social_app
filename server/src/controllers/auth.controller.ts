import UserModel from "../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { SALT_ROUNDS, PEPPER, JWT_SEC } from "../config";
import jwt from "jsonwebtoken";

// Register
export const register = async (req: Request, res: Response) => {
  try {
    // Salt
    const salt = bcrypt.genSaltSync(parseInt(SALT_ROUNDS as unknown as string));

    // Pepper
    const pepper = PEPPER as string;

    // Hashing the Password
    const hashedPassword = bcrypt.hashSync(
      `${req.body.password}${pepper}`,
      salt
    );

    // Creating the User
    const user = new UserModel({
      password: hashedPassword,
      username: req.body.username,
      email: req.body.email,
      profilePicture: req.body.profilePicture,
      coverPicture: req.body.coverPicture,
      followers: req.body.followers,
      followings: req.body.followings,
      isAdmin: req.body.isAdmin,
    });

    // Saving User
    const createdUser: any = await user.save();

    // Return the Other Details
    const { password, ...otherDetails } = createdUser._doc;
    res.status(201).json(otherDetails);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const user: any = await UserModel.findOne({ email: req.body.email });

    // Check If User is exist
    !user && res.status(404).json("User not Found!");

    if (user) {
      // Check Password
      const validPassword = bcrypt.compareSync(
        `${req.body.password}${PEPPER}`,
        user.password
      );
      !validPassword && res.status(400).json("Wrong Password!");

      const { password, ...otherDetails } = user._doc;

      // Create the Token
      const accessToken = jwt.sign({ ...otherDetails }, JWT_SEC as string);

      res.status(200).json({ ...otherDetails, accessToken });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
