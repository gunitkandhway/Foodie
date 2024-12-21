const express = require('express');
const router = express.Router();
const Carts = require('../models/Carts');

const cartController = require('../controllers/CartControllers');
const verifyToken = require('../middleware/verifyToken');

router.get('/',verifyToken,cartController.getCartByEmail);
router.post('/',cartController.addToCart);
router.delete('/:id', cartController.deleteCart)
router.put('/:id', cartController.updateCart)
router.get('/:id', cartController.getSingleCart)

module.exports = router;