const express = require('express')


const app = express()

const dishesRoutes = require('./routes/dishes')
const ordersRoutes = require('./routes/orders')

//middleware parsea a json
app.use(express.json())

app.use('/dishes',dishesRoutes)
app.use('/orders', ordersRoutes)

app.get('/' ,(req , res) => {
    res.json({
        success: true,
        massage: 'fondAPI running'
    })
})

   


module.exports = app