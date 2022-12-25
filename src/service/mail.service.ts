// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export class MailService {
	smtpConfig;
	constructor() {
		this.smtpConfig = {
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		};
	}

	async sendActivationMail(to: string, link: string) {
		const transporter = nodemailer.createTransport(this.smtpConfig);
		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: `Активация аккаунта на ${process.env.API_URL}`,
			text: "",
			html: `
				  <div>
						<h1>Для активации перейдите по ссылке</h1>
						<a href="${link}">${link}</a>
 					</div>
			  `,
		});
	}
}

const mailService = new MailService();

export { mailService };
