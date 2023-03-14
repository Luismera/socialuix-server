import { model, Schema, Model } from 'mongoose';
import Feed from '../../core/entities/Feed';
import { listToTree } from '../../core/utils';

const FeedSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [
      {
        type: new Schema(
          {
            content: { type: String },
            user: { type: Schema.Types.ObjectId, ref: 'User' },
            parent: { type: String },
            children: {
              type: Array,
              defualt: [],
            },
          },
          {
            timestamps: true,
          },
        ),
      },
    ],
  },
  {
    timestamps: true,
  },
);

FeedSchema.pre('find', function () {
  this.populate('user');
  this.populate('comments.user');
});

FeedSchema.post('find', function (docs: any) {
  for (let doc of docs) {
    if (doc.comments) {
      doc.comments = listToTree(doc.comments);
    }
  }
});

FeedSchema.post('findOneAndUpdate', function (doc, next) {
  doc.populate('user').then(function () {
    doc.populate('comments.user').then(function () {
      doc.comments = listToTree(doc.comments);
      next();
    });
  });
});

const FeedModel: Model<Feed> = model<Feed>('Feed', FeedSchema);

export default FeedModel;
