const { response } = require("express");

const login = async(req, res = response) => {
    try {

        res.json({
            ok: true,
            msg: 'hello madafaca'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Todo correcto y yo que me alegro'
        })
    }
}



module.exports = {
    login
};