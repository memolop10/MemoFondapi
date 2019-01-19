const express = require('express')

const router = express.Router()

const student = require('../usecases/students')

router.get('/',async(req,res) =>{
    const students = await student.get()

    res.json({
        success:true,
        massage:'DONE',
        payload:{
            students
        }
    })
  })

                      //callback
  router.post('/', async(req,res) =>{

      try{
          const studentData = req.body
          console.log(studentData)
          const newStudent = await student.create(studentData)

          res.json({
              success: true,
              message:'New student created',
              // nuevo dish como un json
              payload: { student: newStudent }
          })
      } catch(error){
          res.status(400)
          res.json({
              success:false,
              message:'Student could not be created',
              error:[
                  error
              ]
          })
      }
  })

  router.get('/:folio', async(req ,res) =>{
    try{
        const {folio} = req.params
        const studentFound =await student.find(folio)

        res.json({
            success: true,
            message: 'Student found',
            payload: { student: studentFound }
        })

    } catch (error){
        res.status(400)
        res.json({
            success:false,
            massage: 'Student could not be found',
            error:[
                error
            ]
        })          
    }
})

   router.delete('/:id', async(req ,res) =>{
       try{
           const {id} = req.params
           const studentDeleted =await student.del(id)

           res.json({
               success: true,
               message: 'Student deleted',
               payload: { student: studentDeleted }
           })

       } catch (error){
           res.status(400)
           res.json({
               success:false,
               massage: 'Student could not be delete',
               error:[
                   error
               ]
           })          
       }
   })

  module.exports = router