import mongoose from 'mongoose'

const Post = mongoose.Schema({
    author: {type: String, require: true},
    title: {type: String, require: true},
    content: {type: String, require: true},
    image: {type: String},
})

export default mongoose.model('Post', Post)