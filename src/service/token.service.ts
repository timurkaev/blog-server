import type { ITokenModel } from "../models/token.model";
import { TokenModel } from "../models/token.model";
import jwt from "jsonwebtoken";
import type { Model } from "mongoose";

export class TokenService {
	accessSecretKey: string;
	refreshSecretKey: string;
	tokenModel: Model<ITokenModel>;

	constructor() {
		this.accessSecretKey = process.env.JWT_ACCESS_SECRET ?? "error";
		this.refreshSecretKey = process.env.JWT_REFRESH_SECRET ?? "error";
		this.tokenModel = TokenModel;
	}

	generateToken(payload: string | Buffer | object) {
		const accessToken = jwt.sign(payload, this.accessSecretKey, {
			expiresIn: "30m",
		});
		const refreshToken = jwt.sign(payload, this.refreshSecretKey, {
			expiresIn: "30d",
		});

		return {
			accessToken,
			refreshToken,
		};
	}

	saveToken = async (userId: string, refreshToken: string) => {
		const tokenData = await TokenModel.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await TokenModel.create({ user: userId, refreshToken });
		return token;
	};
}

const tokenService = new TokenService();

export { tokenService };
