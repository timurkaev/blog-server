import type { UserController } from "./controllers/user.controller";
// import { router } from "./routes";
import type { LoggerService } from "./service/logger.service";
import cookieParser from "cookie-parser";
import type { Express, Router } from "express";
import express, { json } from "express";
import type { Server } from "http";
import mongoose from "mongoose";

export class App {
	app: Express;
	server: Server;
	logger: LoggerService;
	readonly port: string;
	readonly db: string;
	router: Router;
	mongoose: typeof mongoose;
	userController: UserController;

	constructor(logger: LoggerService, userController: UserController) {
		this.app = express();
		this.port = process.env.PORT || "5555";
		this.db = process.env.DB || "";
		this.logger = logger;
		// this.router = router;
		this.mongoose = mongoose;
		this.userController = userController;
	}

	useRoutes() {
		this.app.use("/api", this.userController.router);
	}

	useDb() {
		this.mongoose
			.connect(this.db)
			.then(() => this.logger.log("База данных подключена"))
			.catch((err) => this.logger.error(`База данных не подключена ${err}`));
	}

	public init() {
		this.app.use(json());
		this.app.use(cookieParser());
		this.useRoutes();
		this.useDb();
		this.server = this.app.listen(this.port);
		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
