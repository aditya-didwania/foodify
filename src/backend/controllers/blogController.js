const Blog = require('../models/blog').Blog;

exports.blog_list = function (req, res, next) {
	Blog.find({}).sort({ updatedAt: -1 }).exec(function (err, blogs) {
		if (err) return next(err);
		res.json(blogs);
	});
}
exports.blog_add = function(req,res,next){
	const blog = new Blog(req.body)
	blog.save(function (err, blog) {
		if (err) return next(err);
		res.status(201);
		res.json(blog);
	});
};
