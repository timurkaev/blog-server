import type { UsersController } from "./controllers/users/users.controller.js";
import "dotenv/config";
import type { Express } from "express";
import express from "express";
import type { Server } from "http";

export class App {
	app: Express;
	server: Server;
	port: number;
	db: string;
	userController: UsersController;

	constructor(userController: UsersController) {
		this.app = express();
		this.port = process.env.PORT;
		this.db = process.env.DB;
		this.userController = userController;
	}

	useRoutes() {
		this.app.use("/auth", this.userController.router);
	}

	useDb() {
		express().connect(this.db);
		console.log("DB connect");
	}

	public async init() {
		this.useRoutes();
		this.server = this.app.listen(this.port);
		this.useDb();
		console.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
