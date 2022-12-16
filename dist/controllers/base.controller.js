import { Router } from "express";
export class BaseController {
    constructor() {
        this._router = Router();
    }
    get router() {
        return this._router;
    }
    send(res, code, message) {
        res.type("application/json");
        return res.status(code).json(message);
    }
    ok(res, message) {
        return this.send(res, 200, message);
    }
    created(res) {
        return res.sendStatus(201);
    }
    bindRoutes(routes) {
        for (const route of routes) {
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}
