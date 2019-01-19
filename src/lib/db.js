const mongoose = require('mongoose')

const connect = () => new Promise((resolve, reject) => {
    //string de coneccion
    mongoose.connect('mongodb://DanielOE:Agilidad-2319@ds231643.mlab.com:31643/agilestudentsdb',{
        useNewUrlParser: true
    });


    const db = mongoose.connection

    //event listener
    db.on('open', () => {
        console.warn('connection open')
        resolve(mongoose)
    })

    //event listener
    db.on('error', (error) => {
        console.error('No pudo conectar:', error)
        reject(error)
    })
})


    module.exports = { connect }