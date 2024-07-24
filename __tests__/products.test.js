const request = require('supertest')

const {app} = require("../server")
const { connect, getUri, closeDb } = require('../db')
const { Builder } = require('../builders/product-builder.js')
//const {store} = require('../services/product-service')

//jest.mock('../services/product-service')
/*beforeEach(()=>{
    store.mockReset();
})*/

beforeAll(async () => {
    const uri = await getUri()
    await connect({ uri })
})

afterAll(async () => {
    await closeDb()
})


/*describe("POST /products", ()=>{
    test("SHOULD store a new product", async()=>{
        const response = await request(app)
        .post('/products')
        .send(Builder.product())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
    })

    test("SHOULD execute store function", async()=>{
        const product = Builder.product()
        await request(app)
        .post('/products')
        .send(product)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

        expect(store).toHaveBeenCalledWith(product)
    })  

})*/

test('should store a new product', async () => {
    const product = Builder.product()
  
    const response = await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  
    const { _id, ...productStored } = response.body
  
    expect(productStored).toEqual(product)
    expect(_id).toBeTruthy()
  })