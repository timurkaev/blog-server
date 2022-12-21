import type { NextFunction, Request, Response } from "express";

export class UserController {
	public async register(req: Request, res: Response, next: NextFunction) {
		try {
			res.send("Registration");
		} catch (error) {}
	}

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
			res.send("activate");
		} catch (error) {}
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
