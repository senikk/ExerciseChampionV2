'use strict';
const {User} = require('../database/models/index')
const {GetJwtMeta} = require('./auth')
const jwt = require('jsonwebtoken');
const moment = require('moment')
const bcrypt = require('bcrypt')

function Signup(input, cb) {
    let req = input.request

    if (!req.name) {
        cb({message: 'Missing name'});
        return;
    }

    if (!req.email || !isValidaEmail(req.email)) {
        cb({message: 'Not valid email address'});
        return;
    }

    if (!req.password || req.password.length < 6) {
        cb({message: 'Minimum password length is 6'});
        return;
    }

    User.findOne({
        where: {
            email: req.email
        }
    }).then(data => data.get({plain: true}))
    .then(user => {
        cb({message: 'User with this email allready exists'});
    }).catch(() => {
        console.log("Adding new user " + req.email);
        User.create({
            name: req.name,
            email: req.email,
            hash: bcrypt.hashSync(req.password, parseInt(process.env.BCRYPTSALTROUNDS))
        }).then(user => {
            cb(null, GetJwtMeta(user))
        }).catch(() => {
            cb({message: 'Could not create user'})
        })
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

function isValidaEmail(email) {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return regexEmail.test(email);
}

module.exports = {
    Signup
}