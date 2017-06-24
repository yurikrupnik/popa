import mongoose, {Schema} from 'mongoose';

let UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: {
        type: String,
    },
    name: String,
    hashPassword: String,
    picture: {
        data: {
            url: String
        }
    }
});

export default mongoose.model('User', UserSchema);
