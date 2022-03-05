const express = require('express');
const router = express.Router();
const blog_controller = require('./controllers/blogController');

router.get('/blogs', blog_controller.blog_list);
router.post('/blogs',blog_controller.blog_add);
module.exports = router;