'use strict';
const {User} = require('../database/models/index')
const jwt = require('jsonwebtoken');
const moment = require('moment')
const bcrypt = require('bcrypt')

function Login(input, cb) {
    var req = input.request
    console.log("LOGIN", req);

    User.findOne({
        where: {
            email: req.email
        }
    }).then(data => data.get({plain: true}))
    .then(user => {
        console.log(user);

        let isMatch = bcrypt.compareSync(req.password, user.hash)
        if (isMatch) {
            cb(null, {
                userid: user.id,
                jwt: getToken(user)
            })
        } else {
            cb({message: 'Could not login'})
        }
    });
}

function getToken(user) {
    let expires = moment().add({days: 7}).unix();
    let token = jwt.sign({
        exp: expires,
        userid: user.id
    }, process.env.JWTSECRET);

    return token
}

module.exports = {
    Login
}