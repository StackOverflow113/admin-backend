const jwt = require('jsonwebtoken');

const JWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = {
            uid
            //  rol,
            //etc
        };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se genero el jwt');
            } else {
                resolve(token);
            }
        });

    });
}
module.exports = {
    JWT,
}

//npm i jsonwebtoken