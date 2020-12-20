const Cart = require('../models/cart');
const order = require('../models/order');
const User = require('../models/user');
const Order = require('../models/order');
const { notifyOrderDelivery } = require('../lib/socket');

async function placeOrder(req, res) {
    try {
        const userId = req.body['userId'];
        const user = await User.findById(userId);
        const cart = await Cart.findById(user['cart']);
        const order = await Order.create({
            items: cart['items'],
            status: 'Delivered',
            userId: userId
        });
        await Cart.findByIdAndUpdate(user['cart'], {items: []});
        notifyOrderDelivery();
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: order
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
    placeOrder
}