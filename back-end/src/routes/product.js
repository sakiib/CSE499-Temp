const express = require('express');
const { createProduct } = require('../controller/product');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const multer = require('multer');
const router = express.Router();
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

// @route POST /api/product/create
// @desc POST a new category
// @access Admin

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);

// router.get('/category/getcategory', getCategories);

module.exports = router;
