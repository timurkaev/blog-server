import { router } from "./routes";
import "dotenv/config";
import type { Express, Router } from "express";
import express, { json } from "express";
import type { Server } from "http";

export class App {
	app: Express;
	server: Server;
	readonly port: string;
	readonly db: string;
	router: Router;

	constructor() {
		this.app = express();
		this.port = process.env.PORT ?? "error";
		this.db = process.env.DB ?? "error";
		this.router = router;
	}

	useRoutes() {
		this.app.use("/api", router);
	}

	useDb() {
		this.app.connect(this.db);
		console.log("База данных подключенна");
	}

	public init() {
		this.app.use(json);
		this.useRoutes();
		this.useDb();
		this.server = this.app.listen(this.port);
		console.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
