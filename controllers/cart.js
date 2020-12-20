const Cart = require('../models/cart');

async function updateCart(req, res) {
    try {
        const cartId = req.body['cartId'];
        const cartData = req.body['cartData'];
        await Cart.findByIdAndUpdate(cartId, {items: cartData});
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: "Product added to cart"
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            statusCode: 400,
            error
        });
    }
}

module.exports = {
    updateCart
}