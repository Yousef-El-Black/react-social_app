import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "../config";

// Verify Token
export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader: string = req.get("Authorization") as string;
  if (authHeader) {
    const token = authHeader.split(" ")[1] as string;
    const jwtSec = JWT_SEC as string;
    jwt.verify(token, jwtSec, (err, user) => {
      if (err) res.status(403).json("Token is not Valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You're not Authenticated");
  }
};

// Verify User
export const verifyUser = (req: any, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You're not Allowed to do that!");
    }
  });
};

// Verify Admin
export const verifyAdmin = (req: any, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You're not Allowed to do that!");
    }
  });
};
