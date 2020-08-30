const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let validRoles = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message:'{VALUE} no es un role valido'
}

const userSchema = new Schema({
    name: {
        type:String,
        required: [true,'El nombre es obligatorio']
    },
    email:{
        type: String,
        unique:true,
        required: [true,'El correo es obligatorio']
    },
    password:{
        type:String,
        required: [true,'la contraseña es obligatoria']
    },
    img:{
        type:String,
        required:false
    },
    role:{
        type: String,
        required:true,
        default:'USER_ROLE',
        enum:validRoles
    },
    status:{
        type:Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    }
  });
  userSchema.plugin(uniqueValidator,{message:'{PATH} ya esta regisradoe n el sistema'});
  module.exports = mongoose.model('User',userSchema);