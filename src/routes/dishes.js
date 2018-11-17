const express = require('express')

const router = express.Router()

const dish = require('../usecases/dishes')

router.get('/',async(req,res) =>{
    const dishes = await dish.get()

    res.json({
        success:true,
        massage:'DONE',
        payload:{
            dishes
        }
    })
  })

                      //callback
  router.post('/',async(req,res) =>{

      try{
          const dishData = req.body
          console.log(dishData)
          const newDish = await dish.create(dishData)

          res.json({
              success: true,
              message:'New dish created',
              // nuevo dish como un json
              payload: { dish: newDish }
          })
      } catch(error){
          res.status(400)
          res.json({
              success:false,
              message:'Dish could not be created',
              error:[
                  error
              ]
          })
      }

      
     

    
  })


  router.delete('/:id', async(req ,res) =>{
      try{
          const {id} = req.params
          const dishDelete = dish.del(id)

          res.json({
              success: true,
              message: 'Dish deleted',
              payload: { dish: dishDelete }
          })

      } catch (error){
          res.status(400)
          res.json({
              success:false,
              massage: 'Dish could not be delete',
              error:[
                  error
              ]
          })
          
      }
  })

  module.exports = router