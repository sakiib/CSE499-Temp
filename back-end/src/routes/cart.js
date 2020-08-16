const express = require('express');
const { addItemToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();

// @route POST /api/user/cart/addtocart
// @desc POST add a product to cart
// @access User

router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);

module.exports = router;