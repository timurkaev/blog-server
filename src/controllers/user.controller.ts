// import { UserSchema } from "../models/UserSchema.js";
// import type { UserTypes } from "../types/user.js";
// import bcrypt from "bcrypt";
// import type { Request, Response } from "express";
// import jwt from "jsonwebtoken";
//
// class UserController {
// 	async register(req: Request, res: Response) {
// 		try {
// 			const passwordHash = await req.body.password;
// 			const salt = await bcrypt.genSalt(10);
// 			const hash = await bcrypt.hash(passwordHash, salt);
// 			const document = new UserSchema<UserTypes>({
// 				fullName: req.body.fullName,
// 				email: req.body.email,
// 				password: hash,
// 				avatar: req.body.avatar,
// 			});
//
// 			const { email } = req.body;
// 			const candidate = await UserSchema.findOne({ email });
//
// 			const user = await document.save();
// 			const token = jwt.sign({ _id: user._id }, "secretkey", {
// 				expiresIn: "14d",
// 			});
//
// 			if (candidate) {
// 				return res.status(400).json({
// 					message: "Пользователь с такой почтой уже существует",
// 				});
// 			}
//
// 			res.json(token);
// 		} catch (error) {
// 			res.status(500).json({
// 				message: "Ошибка при регистрации",
// 			});
// 		}
// 	}
// }
//
// export default new UserController();
