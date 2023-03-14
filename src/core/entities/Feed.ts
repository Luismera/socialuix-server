import Comment from './Comment';
import User from './User';

export default interface Feed {
  content: string;
  user: User;
  comments?: Array<Comment>;
}
