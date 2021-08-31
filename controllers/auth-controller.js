const { response } = require("express");
const Usuario = require("../models/usuario");
const { JWT } = require('../helpers/jwt');
const bcrypt = require('bcryptjs');

const login = async(req, res = response) => {

        const { email, password } = req.body;

        try {
            //Verifica si el usuario ingreso el email correcto

            const usuarioDB = await Usuario.findOne({ email });
            //!usarioDB verifica si existe el usuario si no existe entonces ... ver if
            if (!usuarioDB) {
                return res.status(404).json({
                    msg: 'Email no encontrado '
                });
            }
            //Verificar password, Si hace match con la contrasena del usuario regresaria un true 
            const validPassword = bcrypt.compareSync(password, usuarioDB.password);
            if (!validPassword) {
                return res.status(400).json({
                    ok: true,
                    msg: 'Contrasenia no valida o incorrectaa'
                })
            }
            // Si llega hasta aqui significa que el usuario y la contrasena son correctas entonces hay que generar un JWT
            const token = await JWT(usuarioDB.id);


            res.json({
                ok: true,
                token
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Todo correcto y yo que me alegro'
            })
        }
    }
    //partes de un JWT header,payload,firma


module.exports = {
    login
};