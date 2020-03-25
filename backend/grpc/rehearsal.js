'use strict';
const {Rehearsal, User, Contest} = require('../database/models/index')
const {IsAuthorized} = require('./auth')

let users = []

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
                },{
                    model: Contest,
                    as: 'contest',
                    attributes: ['name']
                }]
            })
            .then(data => data.get({plain: true}))
            .then(data => {
                StreamRehearsalToUsers(data);
                cb(null, data);
            })
        })    
    })
}

function ListRehearsal(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request;

        var where = {}
        if (req.contestid > 0) {
            where.contestid = req.contestid
        }

        console.log("LIST REHEARSAL WHERE", where)

        Rehearsal.findAll({
            where: where,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            },{
                model: Contest,
                as: 'contest',
                attributes: ['name']
            }],
            limit: req.limit,
            raw: true,
            nest: true
        }).then(data => {
            cb(null, {
                rehearsals: data
            })
        })
    })
}

function RehearsalStream(input) {
    console.log("===== ADDING USER =====");
    users.push(input)
    console.log("COUNT", users.length);
}

function StreamRehearsalToUsers(rehearsal) {
    console.log("===== STREAM TO USERS =====");
    console.log("> STREAM COUNT", users.length);
    console.log("> DATA", rehearsal);
    users.forEach(user => {
        user.write(rehearsal);
        /*
        user.write({
            id: rehearsal.id,
            description: rehearsal.description,
            minutes: rehearsal.minutes,
            user: {
                name: rehearsal.user.name
            },
            contest: {
                name: rehearsal.contest.name
            }
        });
        */
    });
}

module.exports = {
    AddRehearsal,
    ListRehearsal,
    RehearsalStream
}