import { Router } from "express";
import { login, register } from "../../controllers/auth.controller";

const authRoutes: Router = Router();

// Register
authRoutes.post("/register", register);

// Login
authRoutes.post("/login", login);

export default authRoutes;
