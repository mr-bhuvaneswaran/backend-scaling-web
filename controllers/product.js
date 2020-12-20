const Products = require('../models/product');

async function getAllProducts(req, res) {
    try {
        const products = await Products.find();
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: products
        });

    } catch (error) {
        console.log("Error", error);
        return res.status(400).json({
            success: false,
            statusCode: 400,
            error
        })
    }

}

module.exports = {
    getAllProducts
}