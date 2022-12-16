import { BaseController } from "../base.controller.js";
export class UsersController extends BaseController {
    constructor() {
        super();
        this.bindRoutes([
            { path: "register", method: "post", func: this.register },
            { path: "login", method: "post", func: this.login },
        ]);
    }
    login(req, res, next) {
        this.ok(res, "login");
    }
    register(req, res, next) {
        this.ok(res, "register");
    }
}
