import { UserController } from "./controllers/user.controller";
import { router } from "./routes";
import cookieParser from "cookie-parser";
import type { Express, Router } from "express";
import express, { json } from "express";
import type { Server } from "http";
import mongoose from "mongoose";

export class App {
	app: Express;
	server: Server;
	readonly port: string;
	readonly db: string;
	router: Router;
	mongoose: typeof mongoose;

	constructor(userController: UserController) {
		this.app = express();
		this.port = process.env.PORT || "5555";
		this.db = process.env.DB || "";
		this.router = router;
		this.mongoose = mongoose;
	}

	useRoutes() {
		this.app.use("/api", router);
	}

	useDb() {
		this.mongoose
			.connect(this.db)
			.then(() => console.log("База данных подключена"))
			.catch((err) => console.log(`База данных не подключена ${err}`));
	}

	public init() {
		this.app.use(json());
		this.app.use(cookieParser());
		this.useRoutes();
		this.useDb();
		this.server = this.app.listen(this.port);
		console.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
