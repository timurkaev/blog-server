import "dotenv/config";
import express, { Router } from "express";
import { connect } from "mongoose";
const app = express();
const router = Router();
const port = process.env.PORT;
const mongoDB = process.env.DB;
app.use(express.json());
app.use("/api", router);
connect(mongoDB)
    .then(() => console.log("DB connect"))
    .catch((error) => console.log(`DB error ${error}`));
// router.post("/register", registerValidation, UserController.register);
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});
