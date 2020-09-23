const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
var PostsController = require('../controllers/PostsController')


// create new blog post 
router.get('/', PostsController.view);


router.post('/', PostsController.create);

module.exports = router;


