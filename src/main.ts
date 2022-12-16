import { App } from "./app.js";
import { UsersController } from "./controllers/users/users.controller.js";

async function bootstrap() {
	const app = new App(new UsersController());
	await app.init();
}

bootstrap();
