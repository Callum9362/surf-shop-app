const Post = require('../models/post');

module.exports = {
    
    //Get all the posts
    async getPosts(req, res, next) {
       let posts = Post.find({})
       res.render('posts/index', { posts });
    },
    
    //New Posts
    newPost(req, res, next){
        res.render('posts/new');
    },

    //Create posts
    async createPost(req, res, next){
       // use req.body to create new posts
       let post = await Post.create(req.body); 
       res.redirect(`/posts/${post.id}`)
    }

}