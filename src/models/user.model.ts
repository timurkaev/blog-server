import type { Document } from "mongoose";
import { Schema, model } from "mongoose";

export interface IUserModel extends Document {
	email: string;
	password: string;
	isActivated: boolean;
	activationLink: string;
}

export const UserModel = model<IUserModel>(
	"user",
	new Schema<IUserModel>({
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		isActivated: { type: Boolean, default: false },
		activationLink: { type: String },
	})
);
