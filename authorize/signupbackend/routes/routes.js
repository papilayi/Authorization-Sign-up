const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password,
        phoneNumber:request.body.phoneNumber,
        address:request.body.address,
        gender:request.body.gender
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router