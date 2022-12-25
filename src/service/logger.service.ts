import { Logger } from "tslog";

export class LoggerService {
	private logger: Logger<void>;

	constructor() {
		this.logger = new Logger({
			name: "My-Logger",
		});
	}

	log(...args: unknown[]) {
		this.logger.info(...args);
	}

	warn(...args: unknown[]) {
		this.logger.warn(...args);
	}

	error(...args: unknown[]) {
		this.logger.error(...args);
	}
}
