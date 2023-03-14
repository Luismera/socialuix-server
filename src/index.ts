import { Applicaction } from './app';
import { connectToMongodb } from './config/mongo.config';

async function main() {
  await connectToMongodb();
  const app = new Applicaction();
  app.start();
}

main();
