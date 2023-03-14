import UserRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import enviroment from '../../config/environment.config';

const signinInteractor =
  (userRepository: UserRepository) =>
  async (email: string, password: string) => {
    const user: any = await userRepository.getByEmail(email);
    if (!user) {
      const error = { message: `User not found: ${email}`, status: 404 };
      throw error;
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      const error = { message: 'Password is not correct', status: 401 };
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

    return { name: user.name, email: user.email, token };
  };

export default signinInteractor;
