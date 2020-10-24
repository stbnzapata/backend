const {Router}=require('express')
const route=Router()
const UserCtrl=require('../controllers/user.controller')

route.get('/obtener',UserCtrl.obtenerdatos)
route.get('/obtener/:id',UserCtrl.obtenerusuario)
route.post('/crear',UserCtrl.crearusuario)
route.put('/actualizar/:id',UserCtrl.actualizarusuario)
route.delete('/eliminar/:id',UserCtrl.eliminarusuario)

module.exports=route