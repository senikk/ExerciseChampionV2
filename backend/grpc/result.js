'use strict';
const sequelize = require('sequelize')
const {Rehearsal, User} = require('../database/models/index')

function ListResult(input, cb) {
    let req = input.request;
    
    console.log("LISTRESULT", req);
  
                /*
              switch (this.period) {
                  case 'week':
                      //this.startdate = moment().firstDayInWeek
                      //this.enddate = this.startdate + 7 days
                      break;
                  case 'month':
                      //this.startdate = moment().firstDayInMonth
                      //this.enddate = moment().lastDayInMonth
                      break;
                  case 'year':
                      //this.startdate = moment().firstDayInYear
                      //this.enddate = moment().lastDayInYear
                      break;
                  case 'lastweek':
                      break;
                  case 'lastmonth':
                      break;
                  case 'lastyear':
                      break;
              }
              */

    Rehearsal.findAll({
    where: [
        { contestid: req.contestid },
        sequelize.literal('extract(YEAR FROM "Rehearsal"."createdAt") = 2020')
    ]
    //    createdAt: {
    //      [Op.gte]: moment().subtract(7, 'days').toDate()
    //    }
    ,
    attributes: ['userid',
                [sequelize.fn('SUM', sequelize.col('minutes')), 'minutes']],
    group: ['userid','user.id'],
    order: [[sequelize.fn('SUM', sequelize.col('minutes')), 'DESC']],
    include: [{
        model: User,
        as: 'user',
        attributes: ['name']
    }],
    limit: 10,
    raw: true,
    nest: true
    }).then(data => {
        console.log("result", data)
        var position = 1;
        cb(null, { results: data.map(r => {
            r.position = position++;
            return r;
        })})
    })
}

module.exports = {
    ListResult
}