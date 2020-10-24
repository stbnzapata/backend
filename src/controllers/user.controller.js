const UserCtrl={}
const User=require('../models/usuario.models')

UserCtrl.obtenerdatos=async(req,res)=>{
    try {
        const usuarios=await User.find()
        res.json(usuarios)
    } catch (error) {
        return res.json({
            error:error.message,
            mensaje: 'El usuario no existe'
        })
    }    
}

UserCtrl.obtenerusuario=async(req,res)=>{
    
    try {
        const id=req.params.id
        const usuario=await User.findById({_id:id})
        if(!usuario){
        return res.json({
            mensaje:'El usuario no existe'
        })
    }
    res.json(usuario)
        
    } catch (error) {
        return res.json({
            error:error.message,
            mensaje: 'El usuario no existe'
        })
    }   
}

UserCtrl.crearusuario=async(req,res)=>{
    try {
        const {nombre,apellido,correo} = req.body
    const nuevosuario=new User({
        nombre,
        apellido,
        correo
    })
    await nuevosuario.save()
    res.json({
        mensaje:'Usuario guardado correctamente'
    })
    } catch (error) {
        return res.json({
            error:error.message,
            mensaje: 'El usuario no existe'
        })
    }    
}

UserCtrl.actualizarusuario=async(req,res)=>{
    try {
        const id=req.params.id
        const usuario=await User.findById({_id:id})
        if(!usuario){
            return res.json({
                mensaje:'El usuario no existe'
            })
        }
        await User.findByIdAndUpdate({_id:id},req.body)
        res.json({
            mensaje:'Usuario actualizado'
        })        
    } catch (error) {
        return res.json({
            error:error.message,
            mensaje: 'El usuario no existe'
        })
    }   
}

UserCtrl.eliminarusuario=async(req,res)=>{
    try {
        const id=req.params.id
    const usuario=await User.findById({_id:id})
    if(!usuario){
        return res.json({
            mensaje:'El usuario no existe'
        })
    }
    await User.findOneAndDelete({_id:id})
    res.json({
        mensaje:'Usuario eliminado'
    })
        
    } catch (error) {
        return res.json({
            error:error.message,
            mensaje: 'El usuario no existe'
        })
    }    
}

module.exports=UserCtrl