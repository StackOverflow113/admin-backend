const { Schema, model } = require('mongoose');


const MedicosSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospitales: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    }

}, { collection: 'medicos' });

MedicosSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Medico', MedicosSchema);