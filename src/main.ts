import { App } from "./app";
import { UserController } from "./controllers/user.controller";
import { LoggerService } from "./service/logger.service";
import "dotenv/config";

async function bootstrap(): Promise<void> {
	const logger = new LoggerService();
	const app = new App(logger, new UserController(logger));
	await app.init();
}

bootstrap();
