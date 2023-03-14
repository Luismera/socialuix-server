import Comment from '../entities/Comment';
import Feed from '../entities/Feed';

interface FeedRepository {
  getFeeds(): Promise<Array<Feed>>;
  getById(id: string): Promise<Feed | null>;
  insertFeed(feed: Feed): Promise<Feed>;
  updateFeed(id: string, feed: Feed): Promise<Feed | null>;
  removeFeed(id: string): Promise<Feed | null>;
}
export default FeedRepository;
