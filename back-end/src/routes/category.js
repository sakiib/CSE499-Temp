const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();

// @route POST /api/category/create
// @desc POST create a new category
// @access Admin
router.post('/category/create', requireSignin, adminMiddleware, addCategory);

// @route GET /api/category/getcategory
// @desc GET get all the categories
// @access User/Admin
router.get('/category/getcategory', getCategories);

module.exports = router;