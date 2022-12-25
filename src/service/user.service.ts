import { UserDto } from "../dtos/user.dto";
import type { IUserModel } from "../models/user.model";
import { UserModel } from "../models/user.model";
import { mailService } from "./mail.service";
import { tokenService } from "./token.service";
import bcrypt from "bcrypt";
import type { Model } from "mongoose";
import { v4 } from "uuid";

export class UserService {
	userModel: Model<IUserModel>;

	constructor() {
		this.userModel = UserModel;
	}

	async registration(email: string, password: string) {
		const candidate = await this.userModel.findOne({ email });
		if (candidate) {
			throw new Error("Пользователь с такой почтой уже существует");
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = v4();
		const user = await this.userModel.create({
			email,
			password: hashPassword,
			activationLink,
		});
		await mailService.sendActivationMail(
			email,
			`${process.env.API_URL}/api/activate/${activationLink}`
		);

		const userDto = new UserDto(user);
		const tokens = tokenService.generateToken({ ...userDto });
		await tokenService.saveToken(userDto._id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto,
		};
	}

	async activate(activationLink: string) {
		const user = await this.userModel.findOne({ activationLink });
		if (!user) {
			throw new Error("Некорректная ссылка активации");
		}
		user.isActivated = true;
		await user.save();
	}
}

const userService = new UserService();
export { userService };
