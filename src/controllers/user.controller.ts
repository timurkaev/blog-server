import type { LoggerService } from "../service/logger.service";
import { userService } from "../service/user.service";
import { BaseController } from "./base.controller";
import type { NextFunction, Request, Response } from "express";

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: "/registration", method: "post", func: this.registration },
			{ path: "/activate/:link", method: "get", func: this.activate },
		]);
	}

	registration = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { fullName, email, password } = req.body;
			const userData = await userService.registration(
				fullName,
				email,
				password
			);
			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 + 60 + 60 + 1000,
				httpOnly: true,
			});
			return res.json(userData);
		} catch (error) {
			console.log(error);
		}
	};

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			res.send("login");
		} catch (error) {}
	}

	async logout(req: Request, res: Response, next: NextFunction) {
		try {
			res.send("logout");
		} catch (error) {}
	}

	async activate(req: Request, res: Response, next: NextFunction) {
		try {
			const activationLink = req.params.link;
			await userService.activate(activationLink);
			return res.redirect(process.env.CLIENT_URL!);
		} catch (error) {
			console.log(error);
		}
	}

	async refresh(req: Request, res: Response, next: NextFunction) {
		try {
			res.send("refresh");
		} catch (error) {}
	}

	async getUsers(req: Request, res: Response, next: NextFunction) {
		try {
			res.json({ message: "getUsers" });
		} catch (error) {}
	}
}
