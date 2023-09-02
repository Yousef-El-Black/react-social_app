import { Request, Router, Response } from "express";
import userRoutes from "./api/user.routes";
import authRoutes from "./api/auth.routes";
import postRoutes from "./api/post.routes";

const routes: Router = Router();

// Auth Routes
routes.use("/auth", authRoutes);

// User Routes
routes.use("/users", userRoutes);

// Post Routes
routes.use("/posts", postRoutes);

// FIXME: Plz, After Test Delete Me
routes.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Api Page");
});

export default routes;
