import environment from '../config/environment.config';
import transporter from '../config/nodemailer.config';
import NotifierRepository from '../core/repositories/notifier.repository';

class EmailNotifier implements NotifierRepository {
  private readonly mailer: any;

  constructor() {
    this.mailer = transporter;
  }

  public async notifyForgotUser(token: any, email: string): Promise<any> {
    let mailOptions = {
      from: '"Socialuix"',
      to: email,
      subject: `Restablece tu contraseña`,
      html: `Visita este vínculo para restablecer la contraseña de <a href="${environment.urlApp}/change-password?token=${token}">Restaurar contraseña</a>`,
    };
    return await this.mailer.sendMail(mailOptions);
  }

  public async notifyCommentFeed(email: string): Promise<any> {
    let mailOptions = {
      from: '"Socialuix"',
      to: email,
      subject: `Han comentado tu publicacion`,
      html: `Tu publicacion tiene un nuevo comentario`,
    };
    return await this.mailer.sendMail(mailOptions);
  }
}

export default EmailNotifier;
