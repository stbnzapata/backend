const express=require('express')
const app=express()
const morgan=require('morgan')
const bodyparser=require('body-parser')
const cors=require('cors')
require('./database')
// abrir puerto

app.set('port',4000)

// middelwares

app.use(morgan('dev'))

app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())

app.use(express.json())

app.use(cors({origen:'*'}))

app.use('/usuario',require('./routes/user.route'))

app.listen(app.get('port'),()=>{
    console.log('servidor activo por pueto',app.get('port'))
})