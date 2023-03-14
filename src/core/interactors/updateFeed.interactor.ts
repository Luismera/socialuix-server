import Feed from '../entities/Feed';
import FeedRepository from '../repositories/feed.repository';

const updateFeedInteractor =
  (feedRepository: FeedRepository) => async (id: string, feed: Feed) => {
    const feedUpdated = await feedRepository.updateFeed(id, feed);

    if (!feedUpdated) {
      const error = { message: `Feed not found`, status: 404 };
      throw error;
    }

    return feedUpdated;
  };

export default updateFeedInteractor;
