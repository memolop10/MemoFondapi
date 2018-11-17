const mongoose= require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    //construyendo el Schema
    name:{
        required: true,
        type:String,
        trim: true,
        maxlength: 20,
        minlength: 1,
          
    },

    price:{
        type: Number,
        required: true,
        min:0,
    },

    description:{
        type: String,
        required:true,
        default:'',
        maxlength:140
    }
})



    module.exports = {
        model: mongoose.model('Dish',schema), 
        schema
    }