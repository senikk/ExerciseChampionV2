'use strict';
const jwt = require('jsonwebtoken');

function IsAuthorized(input, cb) {
    return new Promise((resolve, reject) => {
        try {
            let isVerified = jwt.verify(input.metadata.get("jwt")[0], process.env.JWTSECRET)
            if (!isVerified) { 
                cb({message: 'Unauthorized'})
                reject()
            } else {
                resolve()
            }    
        }
        catch
        {
            cb({message: 'Unauthorized'})
            reject()
        }
    });
}

module.exports = {
    IsAuthorized
}