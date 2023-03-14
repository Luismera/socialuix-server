import { Model } from 'mongoose';
import FeedModel from './models/feed.model';
import Feed from '../core/entities/Feed';
import FeedRepository from '../core/repositories/feed.repository';
import Comment from '../core/entities/Comment';

class FeedMongo implements FeedRepository {
  private readonly model: Model<Feed>;

  constructor() {
    this.model = FeedModel;
  }

  public async getFeeds(): Promise<Array<Feed>> {
    const feed: Array<Feed> = await this.model.find({});
    return feed;
  }

  public async getById(id: string): Promise<Feed | null> {
    const feed: Feed | null = await this.model.findOne({ _id: id });
    return feed;
  }

  public async insertFeed(data: Feed): Promise<Feed> {
    const feed: Feed = await this.model.create(data);
    return feed;
  }

  public async updateFeed(id: string, data: Feed): Promise<Feed | null> {
    const feed: Feed | null = await this.model.findOneAndUpdate(
      { _id: id },
      data,
      { new: true },
    );
    return feed;
  }

  public async removeFeed(id: string): Promise<Feed | null> {
    const feed: Feed | null = await this.model.findOneAndRemove({ _id: id });
    return feed;
  }
}
export default FeedMongo;
