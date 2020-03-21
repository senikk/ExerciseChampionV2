'use strict';
const {Contest, User} = require('../database/models/index')
const {IsAuthorized} = require('./auth')

function AddContest(input, cb) {
    var req = input.request
    req.userid = 1

    if (!req.name) {
        cb({message: 'Contest name missing'})
        return;
    }

    Contest.create(req).then((data) => {
        Contest.findByPk(data.id, {
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            }]
        })
        .then(data => data.get({plain: true}))
        .then(data => {
            cb(null, data);
        })
    })
}

function ListContest(input, cb) {
    IsAuthorized(input, cb).then(() => {
        var req = input.request
        req.limit = req.limit || 10;
        console.log("ListContest", req);
    
        Contest.findAll({
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            }],
            limit: req.limit,
            raw: true,
            nest: true
        }).then(data => {
            console.log("GOT CONTEST RESULT LIST");
            cb(null, {
                contests: data
            })
        })
    })
}

module.exports = {
    AddContest,
    ListContest
}