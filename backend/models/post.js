import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: String,
    city: String,
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    doors: String,
    seats: String,
    transmision: String,
    startDate: String,
    endDate: String,
    days: String,
})

var Post = mongoose.model('Post', postSchema);

export default Post;