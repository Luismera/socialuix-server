import EmailNotifier from '../../dataSources/emailNotifier.datasource';
import FeedMongo from '../../dataSources/feedMongo.datasource';
import UserMongo from '../../dataSources/userMongo.datasource';
import commentFeedInteractor from './commentFeed.interactor';
import deleteFeedInteractor from './deleteFeed.interactor';
import forgotUserInteractor from './forgotUser.interactor';
import listFeedInteractor from './listFeed.interactor';
import saveFeedInteractor from './saveFeed.interactor';
import signinInteractor from './signin.interactor';
import signupInteractor from './signup.interactor';
import updateFeedInteractor from './updateFeed.interactor';
import updatePasswordUserInteractor from './updatePasswordUser.interactor';

// Dependecies
const userRepository = new UserMongo();
const feedRepository = new FeedMongo();
const notifierRepository = new EmailNotifier();

// implements
const signin = signinInteractor(userRepository);
const signup = signupInteractor(userRepository);
const forgotUser = forgotUserInteractor(userRepository, notifierRepository);
const updatePasswordUser = updatePasswordUserInteractor(userRepository);
const saveFeed = saveFeedInteractor(feedRepository);
const listFeed = listFeedInteractor(feedRepository);
const deleteFeed = deleteFeedInteractor(feedRepository);
const updateFeed = updateFeedInteractor(feedRepository);
const commentFeed = commentFeedInteractor(feedRepository, notifierRepository);

export {
  signin,
  signup,
  forgotUser,
  updatePasswordUser,
  saveFeed,
  listFeed,
  deleteFeed,
  updateFeed,
  commentFeed,
};
