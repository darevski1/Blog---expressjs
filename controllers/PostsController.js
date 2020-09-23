var Post = require('./../models/Post');
const mongoose = require('mongoose');


module.exports = {


    // Get all blog post 

    getAllPost: async (req, res) => {

        const posts = await Post.find()

        res.render('index', {
            title: 'Express',
            posts: posts,

        });
    },
    // View - create new blog post
    view: (req, res) => {
        res.render('addpost', { title: "add new post", })
    },

    create: async (req, res) => {

        const post = new Post({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            body: req.body.body,
            category: req.body.category,
            date: new Date(),

        })
        await post.save();

        if (post) {
            res.redirect('/')
        } else {
            throw new Error();
        }

    }

}