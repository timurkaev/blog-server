import { BaseController } from "../base.controller.js";
import type { NextFunction, Request, Response } from "express";

export class UsersController extends BaseController {
	constructor() {
		super();
		this.bindRoutes([
			{ path: "register", method: "post", func: this.register },
			{ path: "login", method: "post", func: this.login },
		]);
	}

	login(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "login");
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "register");
	}
}
