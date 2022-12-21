import { Schema, model } from "mongoose";

export const TokenModel = model(
	"token",
	new Schema({
		user: { type: Schema.Types.ObjectId, ref: "user" },
		refreshToken: { type: String, required: true },
	})
);
