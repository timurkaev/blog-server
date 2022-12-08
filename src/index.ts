import "dotenv/config";
import type { Express, Request, Response } from "express";
import express from "express";

const app: Express = express();

const port: string | undefined = process.env.PORT;

app.listen(port, (): void => {
	console.log(`Server start on port ${port}`);
});
