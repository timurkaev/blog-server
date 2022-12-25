import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

const userController = new UserController();

export { router };
