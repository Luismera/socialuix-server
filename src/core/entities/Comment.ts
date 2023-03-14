import User from './User';

export default interface Comment {
  content: string;
  user: User;
  parent: string;
  children?: [];
}
