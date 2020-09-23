var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController')


/* GET home page. */
router.get('/', PostsController.getAllPost);

module.exports = router;
