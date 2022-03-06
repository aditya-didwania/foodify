const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
}, {timestamps: true});

BlogSchema.virtual('url').get(function () {
    return '/blog/' + this._id;
})


const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
    Blog: Blog
}