'use strict';
const {Rehearsal, User} = require('../database/models/index')

function AddRehearsal(input, cb) {
    var req = input.request
    req.userid = 1

    if (req.contestid < 1) {
        cb({message: 'Contest missing'})
        return;
    }
    if (!req.description) {
        cb({message: 'Description missing'})
        return;
    }

    Rehearsal.create(req).then((data) => {
        Rehearsal.findByPk(data.id, {
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

function ListRehearsal(input, cb) {
    var req = input.request;

    Rehearsal.findAll({
        where: { contestid: 1 },
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
        console.log("result", data);
        cb(null, {
            rehearsals: data
        })
    })
}

module.exports = {
    AddRehearsal,
    ListRehearsal
}