import Comment from '../entities/Comment';
import Feed from '../entities/Feed';
import User from '../entities/User';
import FeedRepository from '../repositories/feed.repository';
import NotifierRepository from '../repositories/notifier.repository';

const commentFeedInteractor =
  (feedRepository: FeedRepository, notifierRepository: NotifierRepository) =>
  async (id: string, comment: Comment) => {
    const feed: Feed | null = await feedRepository.getById(id);
    if (!feed) {
      const error = { message: `Feed not found`, status: 404 };
      throw error;
    }

    feed.comments?.push(comment);

    const feedUpdated: Feed | null = await feedRepository.updateFeed(id, feed);

    if (feedUpdated)
      await notifierRepository.notifyCommentFeed(feedUpdated?.user?.email);

    return feedUpdated;
  };

export default commentFeedInteractor;
