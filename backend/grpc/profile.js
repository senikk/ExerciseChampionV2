'use strict';
const sequelize = require('sequelize')
const {User, Rehearsal} = require('../database/models/index')
const {IsAuthorized} = require('./auth')
const db = require('../database/models/index')
const moment = require('moment')

function GetProfile(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        var req = input.request
        console.log("PROFILE", req.userid)
    
        User.findByPk(req.userid)
        .then(entity => {
            let user = entity.get({plain: true})
            let year = moment().year()
            let month = moment().month() + 1
            let week = moment().week() - 1
    
            db.sequelize.query(`
                with sums as (select sum(minutes) as minutes, extract(YEAR from "createdAt") as year, extract(MONTH from "createdAt") as month, extract(WEEK from "createdAt") as week from "Rehearsals" where userid = ${user.id} and extract(YEAR from "createdAt") = ${year} group by year, month, week)
                , thisweek as (select ROW_NUMBER() OVER (ORDER BY userid) as position, userid, sum(minutes) as minutes from "Rehearsals" where extract(YEAR from "createdAt") = ${year} and extract(WEEK from "createdAt") = ${week} group by "userid")
                select 
                    (select sum(minutes) from sums where year = ${year}) as minutesthisyear,
                    (select sum(minutes) from sums where month = ${month}) as minutesthismonth,
                    (select sum(minutes) from sums where week = ${week}) as minutesthisweek,
                    (select position from thisweek where userid = ${user.id}) as positionthisweek`,
                {
                plain: true,
                raw: true
            }).then(sums => {
                cb(null, {
                    name: user.name,
                    joined: moment(user.createdAt).utc().format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
                    positionthisweek: sums.positionthisweek,
                    minutesthisweek: sums.minutesthisweek,
                    minutesthismonth: sums.minutesthismonth,
                    minutesthisyear: sums.minutesthisyear
                })        
        }).catch(() => {
            cb({message: 'Could not find user'})
        })
       })    
    })
}

module.exports = {
    GetProfile
}