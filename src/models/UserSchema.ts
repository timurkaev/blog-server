import { Schema, model } from "mongoose";

export const UserSchema = model(
	"User",
	new Schema(
		{
			fullName: {
				type: String,
				unique: true,
				required: true,
			},
			email: {
				type: String,
				required: true,
				unique: true,
			},
			password: {
				type: String,
				required: true,
			},
			avatarUrl: String,
		},
		{
			timestamps: true,
		}
	)
);
