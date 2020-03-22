'use strict';
const {User} = require('../database/models/index')
const moment = require('moment')

function GetProfile(input, cb) {
    var req = input.request
    console.log("PROFILE", req);

    User.findByPk(req.userid)
    .then(entity => {
        let user = entity.get({plain: true});
        cb(null, {
            name: user.name,
            joined: user.createdAt,
            positionthisweek: 1,
            minutesthisweek: 10,
            minutesthismonth: 20,
            minutesthisyear: 100
        }) 
    }).catch(() => {
        cb({message: 'Could not find user'})
    })
}

module.exports = {
    GetProfile
}