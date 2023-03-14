import enviroment from './environment.config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(enviroment.smtp);

export default transporter;
