const mongoose=require('mongoose')
const {Schema}=mongoose
const UserSchema=new Schema({
    nombre:String,
    apellido:String,
    correo:String
},{
    timestamps:true
})

module.exports=mongoose.model('user',UserSchema)