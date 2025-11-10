const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories
router.get('/', categoryController.getAllCategories);

// POST create new category
router.post(
  '/',
  body('name').notEmpty().withMessage('Name is required'),
  categoryController.createCategory
);

module.exports = router;
