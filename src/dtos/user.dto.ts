export class UserDto {
	fullName: string;
	email: string;
	_id: string;
	isActivated: boolean;

	constructor(model: UserDto) {
		this.fullName = model.fullName;
		this.email = model.email;
		this._id = model._id;
		this.isActivated = model.isActivated;
	}
}
