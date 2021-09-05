// '/api/hospitales' RUTA
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getHospitales,
    crearHospital,
    ActualizarHospital,
    EliminarHospital
} = require('../controllers/hospital-controller');


const router = Router();

router.get('/', getHospitales);

router.post('/', [], crearHospital);

router.put('/:id', [], ActualizarHospital);

router.delete('/:id', EliminarHospital)

module.exports = router;