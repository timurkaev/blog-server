import { Schema, model } from "mongoose";

export interface ITokenModel {
	user: string | undefined;
	refreshToken: string;
}

export const TokenModel = model<ITokenModel>(
	"token",
	new Schema<ITokenModel>({
		user: { type: Schema.Types.ObjectId, ref: "user" },
		refreshToken: { type: String, required: true },
	})
);
