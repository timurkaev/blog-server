import type { ObjectId } from "mongoose";
import { Schema } from "mongoose";

export class UserDto {
	email: string;
	_id: string;
	isActivated: boolean;

	constructor(model: UserDto) {
		this.email = model.email;
		this._id = model._id;
		this.isActivated = model.isActivated;
	}
}
