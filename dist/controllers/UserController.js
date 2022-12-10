var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserSchema } from "../models/UserSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordHash = yield req.body.password;
                const salt = yield bcrypt.genSalt(10);
                const hash = yield bcrypt.hash(passwordHash, salt);
                const document = new UserSchema({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: hash,
                    avatar: req.body.avatar,
                });
                const { email } = req.body;
                const candidate = yield UserSchema.findOne({ email });
                const user = yield document.save();
                const token = jwt.sign({ _id: user._id }, "secretkey", {
                    expiresIn: "14d",
                });
                if (candidate) {
                    return res.status(400).json({
                        message: "Пользователь с такой почтой уже существует",
                    });
                }
                res.send(token);
            }
            catch (error) {
                res.status(500).json({
                    message: "Ошибка при регистрации",
                });
            }
        });
    }
}
export default new UserController();
