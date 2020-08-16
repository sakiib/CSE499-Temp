const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();

// @route POST /api/category/create
// @desc POST create a new category
// @access Admin
router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router;