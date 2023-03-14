import Feed from '../entities/Feed';
import FeedRepository from '../repositories/feed.repository';

const saveFeedInteractor =
  (feedRepository: FeedRepository) => async (data: Feed) => {
    const feed = await feedRepository.insertFeed(data);
    return feed;
  };

export default saveFeedInteractor;
