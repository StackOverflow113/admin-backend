const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    //leer el token del header de postman 
    const token = req.header('x-token');
    console.log(token);

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'no hay token '
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);

        req.uid = uid;
        next();

    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: 'token invalido'
        })
    }

}




module.exports = {
    validarJWT,
}