import mongoose, { Schema } from 'mongoose';
import { model } from './config';

const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    name: String,
    hashPassword: String,
    picture: {
        data: {
            url: String
        }
    }
});

export default mongoose.model(model, UserSchema);
