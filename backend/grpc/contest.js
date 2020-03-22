'use strict';
const {Contest, User} = require('../database/models/index')
const {IsAuthorized} = require('./auth')

function AddContest(input, cb) {
    var req = input.request
    req.userid = 1
    req.public = req.public || false

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
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request

        req.limit = req.limit || 10;
        console.log("ListContest", req);
    
        var options = {
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            }],
            limit: req.limit,
            raw: true,
            nest: true
        }

        if (req.userid > 0) {
            options.where = {
                userid: req.userid
            }
        }

        User.findByPk(auth.userid, {
            include: {
                model: Contest,
                as: 'joinedContests',
                attributes: ['id']
            }
        }).then(data => data.get({plain: true})).then(user => {
            Contest.findAll(options).then(data => {
                data.map(entry => entry.joined = user.joinedContests.some(c => c.id == entry.id))

                if (req.joined) {
                    data.filter(entry => !entry.joined)
                }

                console.log("MATCHED CONTESTS", data.length);
                cb(null, {
                    contests: data
                })
            })
        });
    })
}

function JoinContest(input, cb) {
    console.log("JOINCONTEST", input);
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request

        User.findByPk(auth.userid).then((user) => {
            user.addContest([req.contestid])
        })
    })
}

module.exports = {
    AddContest,
    ListContest,
    JoinContest
}