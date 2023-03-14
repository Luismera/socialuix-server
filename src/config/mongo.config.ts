import { connect, connection, set } from 'mongoose';
import enviroment from './environment.config';

export async function connectToMongodb() {
  try {
    await connect(enviroment.MongoURI);
  } catch (error) {
    console.log('Error:', error);
  }
}

connection.on('connected', () => {
  console.log('Mongodb connected to:', connection.db.databaseName);
});

connection.on('error', (error) => {
  console.error('error', error);
});

connection.on('disconnected', () => {
  console.log('Mongodb disconnected');
});
