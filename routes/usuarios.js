const { Router } = require('express');
const { getUsers, creatUsers, updateUser, deleteUser } = require('../controllers/usuarios-controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/', validarJWT, getUsers);

router.post('/', [

        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contrasenia es obligatoria ').not().isEmpty(),
        check('email', 'El correo es obligatorio').isEmail(),
        validarCampos
    ],
    creatUsers);

router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('role', 'El rol es obligatorio').not().isEmpty(),
    validarCampos
], updateUser);

router.delete('/:id', validarJWT, deleteUser)

module.exports = router;


//MIDDLEWARE SON FUNCIONES QUE SE EJECUTAN ANTES DE LLEGAR A OTRAS, TAMBIEN VERIFICAN QUE LA INFORMACION VENGA COMO UNO ESPERA
// para definir varios middleware hay que agregarlos como un array