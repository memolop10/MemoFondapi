const mongoose = require('mongoose')

const connect = () => new Promise((resolve, reject) => {
    //string de coneccion
    mongoose.connect('mongodb://Rak:Kancerbero10@ds255403.mlab.com:55403/memodb',{
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