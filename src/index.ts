// import UserController from "./controllers/UserController";
import { registerValidation } from "./validations/auth";
import "dotenv/config";
import type { Express, Request, Response } from "express";
import express, { Router } from "express";
import { connect } from "mongoose";

const app: Express = express();
const router = Router();
const port: string = process.env.PORT;
const mongoDB: string = process.env.DB;

app.use(express.json());
app.use("/api", router);

connect(mongoDB)
	.then(() => console.log("DB connect"))
	.catch((error) => console.log(`DB error ${error}`));

// router.post("/register", registerValidation, UserController.register);

app.listen(port, (): void => {
	console.log(`Server start on port ${port}`);
});
