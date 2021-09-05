// '/api/medicos'RUTA
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getMedicos,
    CreateMedicos,
    UpdateMedico,
    DeleteMedico
} = require('../controllers/medicos-controller');


const router = Router();

router.get('/', getMedicos);

router.post('/', [], CreateMedicos);

router.put('/:id', [], UpdateMedico);

router.delete('/:id', DeleteMedico)

module.exports = router;