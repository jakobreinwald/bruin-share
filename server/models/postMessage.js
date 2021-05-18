import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    subjectId: String,
    classId: String,
    year: {
        type: String,
        default: '2021',
    },
    quarter: String,
    yearQuarter:  {
        type: String,
        default: function() {
            return this.quarter + ' ' + this.year
        },
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;