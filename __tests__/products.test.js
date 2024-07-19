const request = require('supertest')

const {app} = require("../server")
const { Builder } = require('../builders/product-builder.js')

describe("POST /products", ()=>{

    test("SHOULD store a new product", async()=>{
        const product = Builder.product();
        const response = await request(app).post('/products')
        .send(product).set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

        expect(response.body).toEqual({...product, _id:'abc'})

    })

})