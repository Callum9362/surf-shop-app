const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware/index');
const { getPosts } = require('../controllers/posts');


/* GET posts index /posts */
router.get('/', errorHandler(getPosts));

/* GET posts news /posts/new */
router.get('/new', (req, res, next) => {
    res.send('INDEX /posts');
  });

/* POST posts creates /posts */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
  });

/* GET posts show /posts?:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
  });

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
  });

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
  });

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
  });


module.exports = router;
