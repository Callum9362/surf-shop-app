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
       let post = await Post.create(req.body); 
       res.redirect(`/posts/${post.id}`)
    },

    //Show a post by its id
    async showPost(req, res, next){
       let post = await Post.findById(req.params.id);
       res.render('posts/show', { post });
    }

}