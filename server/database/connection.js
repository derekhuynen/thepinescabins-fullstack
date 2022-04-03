import mongoose from 'mongoose';
import Logger from '../Logger.js';



const MONGO_URI = "mongodb://localhost:27017/First";

export const db = mongoose.createConnection(MONGO_URI);

// handlers
db.on('connecting', () => {
    Logger.info('[MongoDB] connecting');
});

db.on('error', (error) => {
    Logger.error(`[MongoDB] connection ${error}`);
    mongoose.disconnect().catch(() => console.log("failed to disconnect"));
});

db.on('connected', () => {
    Logger.info('[MongoDB] connected');
});

db.once('open', () => {
    Logger.info('[MongoDB] connection opened');
});

db.on('reconnected', () => {
    Logger.warn('[MongoDB] reconnected');
});

db.on('reconnectFailed', () => {
    Logger.error('[MongoDB] reconnectFailed');
});

db.on('disconnected', () => {
    Logger.warn('[MongoDB] disconnected');
});

db.on('fullsetup', () => {
    Logger.debug('[MongoDB] reconnecting... %d');
});
