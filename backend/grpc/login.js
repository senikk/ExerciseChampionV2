'use strict';
const {User} = require('../database/models/index')
const {GetJwtMeta} = require('./auth')
const bcrypt = require('bcrypt')
const moment = require('moment')

function Login(input, cb) {
    var req = input.request
    console.log("LOGIN", req);

    User.findOne({
        where: {
            email: req.email
        }
    })
    .then(entity => {
        let user = entity.get({plain: true});
        
        let isMatch = bcrypt.compareSync(req.password, user.hash)
        if (isMatch) {
            entity.update({lastseen: moment()})
            cb(null, GetJwtMeta(user))
        } else {
            cb({message: 'Could not login'})
        }
    }).catch(() => {
        cb({message: 'Could not find user'})
    })
}

module.exports = {
    Login
}