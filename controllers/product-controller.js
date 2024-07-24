const {store} = require('../services/product-service');

module.exports.createProduct=async (req, res)=>{
    const { name, description, price } = req.body
     //const _id = 'abc';
     const product = await store({ name, description, price });
    console.log("PRODUCT", product);
    res.status(201).json({
        name:product.name,
        description:product.description,
        price:product.price,
        _id:product._id,
      })
}