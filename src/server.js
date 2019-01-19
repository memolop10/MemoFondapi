const express = require('express')


const app = express()

const studentsRoutes = require('./routes/students')
// const ordersRoutes = require('./routes/orders')
// const authRoutes = require('./routes/auth')
// const userRoutes = require('./routes/users')

//middleware parsea a json
app.use(express.json())

app.use('/students',studentsRoutes)
// app.use('/orders', ordersRoutes)
// app.use('/auth',authRoutes)
// app.use('/users',userRoutes)

app.get('/' ,(req , res) => {
    res.json({
        success: true,
        massage: 'studentsAPI running'
    })
})

   


module.exports = app