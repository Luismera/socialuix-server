import { model, Schema, Model } from 'mongoose';
import User from '../../core/entities/User';

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const UserModel: Model<User> = model<User>('User', UserSchema);

export default UserModel;
