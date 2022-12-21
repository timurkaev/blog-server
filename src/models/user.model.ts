import { Schema, model } from "mongoose";

export const UserModel = model(
	"user",
	new Schema({
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		isActivated: { type: Boolean, default: false },
		activationLink: { type: String },
	})
);
