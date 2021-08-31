const Usuario = require('../models/usuario');
const { response } = require('express');
const bcrypt = require('bcryptjs');





const getUsers = async(req, res = response) => {

    const usuario = await Usuario.find({}, 'nombre email rol google');

    res.json({
        ok: true,
        usuario
    });
};

const creatUsers = async(req, res) => {

    const { email, password } = req.body;



    try {

        const existEmail = await Usuario.findOne({ email });

        if (existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }

        const usuario = new Usuario(req.body);

        //ENCRYPT PASSWORD
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);


        //SAVE USER
        await usuario.save();


        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error inesperado... ver logs'
        });
    }

};

const updateUser = async(req, res = response) => {
    //TODO: Validar token y comprobar si es el usuario correcto
    const uid = req.params.id;


    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario'
            });
        }

        //Actualizaciones
        const { password, google, email, ...campos } = req.body;

        if (usuarioDB.email !== email) {

            const existeEmail = await Usuario.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }

        }

        campos.email = email;

        const userUpdated = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            usuario: userUpdated
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperadop'
        })
    }
}

const deleteUser = async(req, res = response) => {
    const uid = req.params.id;
    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe usuario con ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);


        res.json({
            ok: true,
            msg: 'Usuario eliminado correctamente'
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'usaurio elmiminado',
            deleteUser
        });
    }

}

module.exports = {
    getUsers,
    creatUsers,
    updateUser,
    deleteUser
};


//TODO: GET: CONSULTA LOS USUARIOS DE LA BASE DE DATOS, POST: CREAO UN USUARIO NUEVO, PUT: ACTUALIZA UN USUARIO Y LOS DATOS Y DELETE: ELIMINA USUARIOS.


