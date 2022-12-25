import { App } from "./app";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

async function bootstrap(): Promise<void> {
	dotenv.config();
	const app = new App();
	await app.init();
}

bootstrap();
