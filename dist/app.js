var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "dotenv/config";
import express from "express";
export class App {
    constructor(userController) {
        this.app = express();
        this.port = process.env.PORT;
        this.db = process.env.DB;
        this.userController = userController;
    }
    useRoutes() {
        this.app.use("/auth", this.userController.router);
    }
    useDb() {
        express().connect(this.db);
        console.log("DB connect");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.useRoutes();
            this.server = this.app.listen(this.port);
            this.useDb();
            console.log(`Сервер запущен на http://localhost:${this.port}`);
        });
    }
}
