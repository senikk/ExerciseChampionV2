'use strict';
const sequelize = require('sequelize')
const {Rehearsal, User} = require('../database/models/index')
const {IsAuthorized} = require('./auth')
const moment = require('moment')

function ListResult(input, cb) {
    IsAuthorized(input, cb).then((auth) => {
        let req = input.request;
    
        console.log("LISTRESULT", req);
        let year = moment().year()
        let month = moment().month() + 1
        let week = moment().week()
    
        console.log(`YEAR: ${year} MONTH: ${month} WEEK: ${week}`)
    
        var filter = {}
        switch (req.period) {
            case 'THISYEAR':
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year}`)
                break;
            case 'THISMONTH':
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year} and extract(MONTH FROM "Rehearsal"."createdAt") = ${month}`)
                break;
            case 'THISWEEK':
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year} and extract(WEEK FROM "Rehearsal"."createdAt") = ${week}`)
                break;
            case 'LASTWEEK':
                let lastweek = moment().add(-1, 'week')
                year = lastweek.year()
                week = lastweek.week()
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year} and extract(WEEK FROM "Rehearsal"."createdAt") = ${week}`)
                break;
            case 'LASTMONTH':
                let lastmonth = moment().add(-1, 'month')
                year = lastmonth.year()
                month = lastmonth.month() + 1
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year} and extract(MONTH FROM "Rehearsal"."createdAt") = ${month}`)
                break;
            case 'LASTYEAR':
                year = year - 1
                filter = sequelize.literal(`extract(YEAR FROM "Rehearsal"."createdAt") = ${year}`)
                break;
        }

        var contestfilter = {}
        if (req.contestid > 0) { contestfilter = { contestid: req.contestid } }
    
        Rehearsal.findAll({
            where: [
                contestfilter,
                filter
            ],
            attributes: ['userid',
                        [sequelize.fn('SUM', sequelize.col('minutes')), 'minutes']],
            group: ['userid','user.id'],
            order: [[sequelize.fn('SUM', sequelize.col('minutes')), 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['name']
            }],
            limit: req.limit || 20,
            raw: true,
            nest: true
        }).then(data => {
            var position = 1;
            cb(null, { results: data.map(r => {
                r.position = position++;
                return r;
            })})
        })    
    })
}

module.exports = {
    ListResult
}