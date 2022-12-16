"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_js_1 = require("../models/UserSchema.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordHash = yield req.body.password;
                const salt = yield bcrypt_1.default.genSalt(10);
                const hash = yield bcrypt_1.default.hash(passwordHash, salt);
                const document = new UserSchema_js_1.UserSchema({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: hash,
                    avatar: req.body.avatar,
                });
                const { email } = req.body;
                const candidate = yield UserSchema_js_1.UserSchema.findOne({ email });
                const user = yield document.save();
                const token = jsonwebtoken_1.default.sign({ _id: user._id }, "secretkey", {
                    expiresIn: "14d",
                });
                if (candidate) {
                    return res.status(400).json({
                        message: "Пользователь с такой почтой уже существует",
                    });
                }
                res.json(token);
            }
            catch (error) {
                res.status(500).json({
                    message: "Ошибка при регистрации",
                });
            }
        });
    }
}
exports.default = new UserController();
