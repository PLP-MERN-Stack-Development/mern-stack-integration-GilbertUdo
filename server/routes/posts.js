const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

// GET post by ID or slug
router.get('/:idOrSlug', postController.getPostByIdOrSlug);

// CREATE post
router.post('/', postController.createPost);

module.exports = router;
