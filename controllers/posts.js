const Post = require('../models/post');

//Configure cloudinary for image upload.
const cloudinary = require('cloudinary');

cloudinary.config({
   cloud_name: 'dq2dc9ltz',
   api_key: '164434599518313',
   api_secret: process.env.CLOUDINARY_SECRET
});

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
       req.body.post.images = [];
       for(const file of req.files) {
         let image = await cloudinary.v2.uploader.upload(file.path);
         req.body.post.images.push({ 
            url: image.secure_url,
            public_id: image.public_id
         });
      }
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