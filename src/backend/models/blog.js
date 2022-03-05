const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

BlogSchema.virtual('url').get(function () {
    return '/blog/' + this._id;
})

BlogSchema.method('update', function (updates, callback) {
    Object.assign(this, updates, { updatedAt: new Date() });
    this.save(callback);
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
    Blog: Blog
}