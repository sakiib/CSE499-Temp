const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function(req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// @route POST /api/category/create
// @desc POST create a new category
// @access Admin
router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addCategory);

// @route GET /api/category/getcategory
// @desc GET get all the categories
// @access User/Admin
router.get('/category/getcategory', getCategories);

module.exports = router;