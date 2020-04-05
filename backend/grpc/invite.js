'use strict';
const {User, Invite, EntityType} = require('../database/models/index')
const {IsAuthorized} = require('./auth')
const bcrypt = require('bcrypt')
const moment = require('moment')

function GetInvite(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        var req = input.request
        switch (req.entitytype) {
            case 'CONTEST':
                req.entitytype = 1
                break
            default:
                req.entitytype = null
                break;
        }

        Invite.findOne({
            where: {
                entitytype: req.entitytype,
                entityid: req.entityid,
                userid: auth.userid
            }
        }).then((invite) => {
            console.log("=== EXISTING INVITE", invite)
            if (invite) {
                cb(null, invite)
            }
            else {
                console.log("=== CREATE NEW INVITE")
                Invite.create({
                    userid: auth.userid,
                    entitytype: req.entitytype,
                    entityid: req.entityid,
                    hash: bcrypt.hashSync(req.entityid + "@" + req.entitytype + ":" + moment().unix(), parseInt(process.env.BCRYPTSALTROUNDS))
                }).then((invite) => {
                    console.log("=== INVITE CREATED", invite)
                    cb(null, invite)
                })    
            }
       })
    })
}

function AcceptInvite(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        var req = input.request
    
        Invite.findOne({
            where: {
                hash: req.hash
            }
        })
        .then(entity => {
            let invite = entity.get({plain: true});
            switch (invite.entitytype) {
                case 1: // CONTEST
                    User.findByPk(auth.userid).then((user) => {
                        user.addJoinedContest([invite.entityid])
                        cb(null, invite)
                    })
                    break
            }
        })
        .catch(() => {
            cb({message: 'Could not find invite'})
        })    
    })
}

module.exports = {
    GetInvite,
    AcceptInvite
}