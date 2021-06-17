const should = require('chai').should();
const expect = require('chai').expect;
const chai= require('chai');
var assert = require('chai').assert;

const request = require('supertest')

const app= require('../app');

// Test Suite For Contatc API Endpoints
describe('Testing Contact API', ()=>{
    // Test Casees
    it('Should Get All Contact', (done)=>{
        request(app)
        .post('/api/v1/contact')
        .send({query:'{contact{contactId,age,mobile}}'})
        .expect(200)
        .end((err, res)=>{
           res.body.data.contact[0].should.have.property('age');
           //console.log(res.body.data.contact[0]);
        })
        done();
    })

    it('Should Check invalid Request',(done)=>{
        request(app)
        .post('/api/v1/contact')
        .send({query:'{contact{name}}'})
        .expect(400)
        // .end((err, res)=>{
        //    res.body.error.message.should.be('Cannot query field \"name\" on type \"Contacts\". Did you mean \"age\"?');
        //    //console.log(res.body.data.contact[0]);
        // })
        done();
    })
})

describe('Testing TO add a new Contact', ()=>{
    it('Shoukld Add Succesfully',()=>{
        request(app)
        .post('/api/v1/contact')
        .send({query:'mutation{createContact:(userInput:){,age,mobile}}'})
        .expect(200)
        .end((err, res)=>{
           res.body.data.contact[0].should.have.property('age');
           //console.log(res.body.data.contact[0]);
        })
        done();

    })
    it('Add contact with duplicate Value',())
})
