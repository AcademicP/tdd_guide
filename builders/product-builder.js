module.exports.Builder = {
    product: ( {name='Paquete Pan Frances', description='this is a test', price=7 } = {}) => ({
      name,
      description,
      price,
    }),
  }