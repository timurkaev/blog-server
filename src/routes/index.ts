import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

const userController = new UserController();

router.post("/registration", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.getUsers);

export { router };
