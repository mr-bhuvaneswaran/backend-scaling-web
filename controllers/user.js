const Users = require('../models/user');
const Cart = require('../models/cart');

async function getUser(req, res) {
    try {
        let user = await Users.findOne();
        const cart = await Cart.findById(user['cart']);
        user['cart'] = cart;
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: user
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
    getUser
}