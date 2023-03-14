import UserRepository from '../repositories/user.repository';
import NotifierRepository from '../repositories/notifier.repository';
import jwt from 'jsonwebtoken';
import enviroment from '../../config/environment.config';

const forgotUserInteractor =
  (userRepository: UserRepository, notifierRepository: NotifierRepository) =>
  async (email: string) => {
    const user: any = await userRepository.getByEmail(email);
    if (!user) {
      const error = { message: `User not found: ${email}`, status: 404 };
      throw error;
    }

    let token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
      enviroment.jwt.seed_auth,
      {
        expiresIn: enviroment.jwt.expire_token,
      },
    );

    await notifierRepository.notifyForgotUser(token, email);

    return { message: `Send meail to: ${email}` };
  };

export default forgotUserInteractor;
