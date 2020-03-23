'use strict';
const {Rehearsal, User} = require('../database/models/index')
const {IsAuthorized} = require('./auth')

function AddRehearsal(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        var req = input.request
        req.userid = auth.userid
    
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
    })
}

function ListRehearsal(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request;

        Rehearsal.findAll({
            where: { contestid: req.contestid },
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
    })
}

module.exports = {
    AddRehearsal,
    ListRehearsal
}