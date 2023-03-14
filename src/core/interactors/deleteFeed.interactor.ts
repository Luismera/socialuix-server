import FeedRepository from '../repositories/feed.repository';

const deleteFeedInteractor =
  (feedRepository: FeedRepository) => async (id: string) => {
    const feedDeleted = await feedRepository.removeFeed(id);
    if (!feedDeleted) {
      const error = { message: `Feed not found`, status: 404 };
      throw error;
    }
    return feedDeleted;
  };

export default deleteFeedInteractor;
