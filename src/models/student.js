const mongoose= require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    //construyendo el Schema
    name_student:{
        required: true,
        type:String,
        trim: true,
        maxlength: 50,
        minlength: 1,
    },

    first_surname_student:{
        required: true,
        type:String,
        trim: true,
        maxlength: 50,
        minlength: 1,
    },

    second_surname_student:{
        required: true,
        type:String,
        trim: true,
        maxlength: 50,
        minlength: 1,
    },

    folio_student:{
        required: true,
        type:String,
        trim: true,
        maxlength: 50,
        minlength: 1,
    }

    // url_student:{
    //     required: true,
    //     type:String,
    //     trim: true,
    //     maxlength: 100,
    //     minlength: 1,
    // },

    // url_certificate:{
    //     required: true,
    //     type:String,
    //     trim: true,
    //     maxlength: 100,
    //     minlength: 1,
    // }
})



    module.exports = {
        model: mongoose.model('Student',schema), 
        schema
    }