interface NotifierRepository {
  notifyForgotUser(token: any, email: string): Promise<any>;
  notifyCommentFeed(email: string): Promise<any>;
}

export default NotifierRepository;
