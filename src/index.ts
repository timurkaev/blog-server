// import UserController from "./controllers/UserController.js";
// import { authRouter } from "./routes/auth.router.js";
// import { registerValidation } from "./validations/auth.js";
// import type { Express, Request, Response } from "express";
// import express, { Router } from "express";
// import { connect } from "mongoose";
//
// const app: Express = express();
// const port: string = process.env.PORT;
// const mongoDB: string = process.env.DB;
//
// app.use(express.json());
// app.use("/auth", authRouter);
// connect(mongoDB)
// 	.then(() => console.log("DB connect"))
// 	.catch((error) => console.log(`DB error ${error}`));
//
// app.listen(port, (): void => {
// 	console.log(`Server start on port ${port}`);
// });
