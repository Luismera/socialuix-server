import User from '../entities/User';

interface UserRepository {
  getByEmail(email: string): Promise<User | null>;
  getById(id: string): Promise<User | null>;
  insertUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User | null>;
  setPasswordUser(id: string, password: string): Promise<User | null>;
  removeUser(id: string): Promise<User | null>;
}
export default UserRepository;
