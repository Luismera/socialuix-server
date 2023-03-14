import User from '../entities/User';
import UserRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';

const updatePasswordUserInteractor =
  (userRepository: UserRepository) => async (id: string, password: string) => {
    const user: User | null = await userRepository.getById(id);
    if (!user) {
      const error = { message: 'User not found', status: 404 };
      throw error;
    }
    password = bcrypt.hashSync(password, 10);
    const userUpdated: User | null = await userRepository.setPasswordUser(
      id,
      password,
    );

    return userUpdated;
  };

export default updatePasswordUserInteractor;
