const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
  })

const Product = mongoose.model('products', productSchema)

module.exports.store = async ({ name, description, price }) => {
    const product = new Product({
        name,
        description,
        price,
      })

      await product.save()
      return product
}