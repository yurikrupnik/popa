import mongoose from 'mongoose';
import { databaseUrl } from './config';

mongoose.connect(databaseUrl);

const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // we're connected!
});

export default db;
