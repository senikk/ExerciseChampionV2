'use strict';
const jwt = require('jsonwebtoken');
const moment = require('moment')

function IsAuthorized(input, cb) {
    return new Promise((resolve, reject) => {
        try {
            let isVerified = jwt.verify(input.metadata.get("jwt")[0], process.env.JWTSECRET)
            if (!isVerified) { 
                cb({message: 'Unauthorized'})
                reject()
            } else {
                let user = jwt.decode(input.metadata.get("jwt")[0])
                resolve(user)
            }    
        }
        catch
        {
            cb({message: 'Unauthorized'})
            reject()
        }
    });
}

function GetJwtMeta(user) {
    let expires = moment().add({days: 7}).unix();
    let token = jwt.sign({
        exp: expires,
        userid: user.id
    }, process.env.JWTSECRET);

    return {
        name: user.name,
        userid: user.id,
        jwt: token
    }
}

module.exports = {
    IsAuthorized,
    GetJwtMeta
}