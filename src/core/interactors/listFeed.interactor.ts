import Feed from '../entities/Feed';
import FeedRepository from '../repositories/feed.repository';

const listFeedInteractor = (feedRepository: FeedRepository) => async () => {
  let feeds: Array<Feed> = await feedRepository.getFeeds();

  return feeds;
};

export default listFeedInteractor;
