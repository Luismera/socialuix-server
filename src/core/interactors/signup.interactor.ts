import User from '../entities/User';
import UserRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';

const signupInteractor =
  (userRepository: UserRepository) => async (data: User) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const user: User | null = await userRepository.insertUser(data);

    return user;
  };

export default signupInteractor;
