declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly PORT: string;
			readonly DB: string;
			readonly JWT_ACCESS_SECRET: string;
			readonly JWT_REFRESH_SECRET: string;
			readonly SMTP_HOST: string;
			readonly SMTP_PORT: string;
			readonly SMTP_USER: string;
			readonly SMTP_PASSWORD: string;
			readonly API_URL: string;
			readonly CLIENT_URL: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
