const request = require('supertest')

const {app} = require("../server")

describe("POST /products", ()=>{

    test("SHOULD store a new product", async()=>{
        
        const response = await request(app).post('/products')
        .send({
            name: 'Paquete Pan Frances',
            description: 'this is a test',
            price: 7,
        }).set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

        expect(response.body).toEqual({
            name: 'Paquete Pan Frances',
            description: 'this is a test',
            price: 7,
            _id: 'abc',
          })

    })

})