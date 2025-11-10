const Post = require('../models/Post');

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET post by ID or slug
exports.getPostByIdOrSlug = async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    const post = await Post.findOne({ _id: idOrSlug }) || await Post.findOne({ slug: idOrSlug });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
