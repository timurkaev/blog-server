import { App } from "./app";
import { LoggerService } from "./service/logger.service";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

async function bootstrap(): Promise<void> {
	dotenv.config();
	const app = new App(new LoggerService());
	await app.init();
}

bootstrap();
