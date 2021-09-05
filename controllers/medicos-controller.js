const { response } = require("express");

const getMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get medicos'
    })
}

const CreateMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear medico'
    })
}
const UpdateMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Actualizar medico'
    })
}
const DeleteMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar medico'
    })
}

module.exports = {
    getMedicos,
    CreateMedicos,
    UpdateMedico,
    DeleteMedico
}