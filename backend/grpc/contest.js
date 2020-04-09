'use strict';
const {Contest, User, UserContest} = require('../database/models/index')
const {IsAuthorized} = require('./auth')
const sequelize = require('sequelize')

function AddContest(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
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
    })
}

function ListContest(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request

        req.limit = req.limit || 10;
        console.log("== ListContest", req);
    
        var options = {
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            }],
            attributes: [
                'Contest.*',
                [sequelize.literal('(SELECT COUNT(userid)::integer FROM "UserContests" WHERE contestid = "Contest".id)'), 'participants']],
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
                    data.filter(entry => entry.joined)
                }
                if (req.public) {
                    data.filter(entry => entry.public)
                }

                cb(null, {
                    contests: data
                })
            }).catch(() => {
                cb({message: 'Did not find matched contests'})
            });
        }).catch(() => {
            cb({message: 'Missing user'})
        })
    })
}

function JoinContest(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request

        User.findByPk(auth.userid).then((user) => {
            user.addJoinedContest([req.contestid])
            cb()
        })
    })
}

module.exports = {
    AddContest,
    ListContest,
    JoinContest
}
