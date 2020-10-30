const Post = require('../models/post');

module.exports = {
    
    //Get all the posts
    async postIndex(req, res, next) {
       let posts = await Post.find({})
       res.render('posts/index', { posts });
    },
    
    //New Posts
    postNew(req, res, next){
        res.render('posts/new');
    },

    //Create posts
    async postCreate(req, res, next){
       let post = await Post.create(req.body.post); 
       res.redirect(`/posts/${post.id}`);
    },

    //Show a post by its id
    async postShow(req, res, next){
       let post = await Post.findById(req.params.id);
       res.render('posts/show', { post });
    },

    //Edit a post
    async postEdit(req, res, next){
       let post = await Post.findById(req.params.id);
       res.render('posts/edit', { post });
    },

    //Posts update
    async postUpdate(req, res, next){
       let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
       res.redirect(`/posts/${post.id}`);
    },

    //Destory a post
    async postDestroy(req, res, next){
      await Post.findByIdAndRemove(req.params.id);
      res.redirect('/posts');
   }


}