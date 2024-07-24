const express = require('express')
const {store} = require('./services/product-service');
const router = express.Router()

router.post('/products', async(req, res) => {   
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
  })

  module.exports.router = router