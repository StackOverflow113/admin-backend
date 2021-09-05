const { response } = require("express");

const getHospitales = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get hospitales'
    })
}

const crearHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear hospital'
    })
}
const ActualizarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Actualizar hospital'
    })
}
const EliminarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar hospital'
    })
}




module.exports = {
    getHospitales,
    crearHospital,
    ActualizarHospital,
    EliminarHospital
}