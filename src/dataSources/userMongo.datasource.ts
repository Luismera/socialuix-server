import User from '../core/entities/User';
import UserRepository from '../core/repositories/user.repository';
import { Model } from 'mongoose';
import UserModel from './models/user.model';

class UserMongo implements UserRepository {
  private readonly model: Model<User>;

  constructor() {
    this.model = UserModel;
  }

  public async getByEmail(email: string): Promise<User | null> {
    const user: User | null = await this.model.findOne({ email }).lean();
    return user;
  }

  public async getById(id: string): Promise<User | null> {
    const user: User | null = await this.model.findOne({ _id: id }).lean();
    return user;
  }

  public async insertUser(data: User): Promise<User> {
    const user: User = await this.model.create(data);
    return user;
  }

  public async updateUser(id: string, data: User): Promise<User | null> {
    const user: User | null = await this.model.findOneAndUpdate(
      { _id: id },
      data,
      { new: true },
    );
    return user;
  }

  public async setPasswordUser(
    id: string,
    password: string,
  ): Promise<User | null> {
    const user: User | null = await this.model.findOneAndUpdate(
      { _id: id },
      { password },
      { new: true },
    );
    return user;
  }

  public async removeUser(id: string): Promise<User | null> {
    const user: User | null = await this.model.findOneAndRemove({ _id: id });
    return user;
  }
}
export default UserMongo;
