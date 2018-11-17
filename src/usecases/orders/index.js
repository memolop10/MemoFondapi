const Order = require('../../models/order').model

const dish = require('../dishes')

const get = () => Order.find({}).exec() 

// casos post
const create = async(orderData) =>{

const { dishes = [] } = orderData

  const dishPromises = dishes.map((dishId) =>{
       return dish.getById(dishId)
    })

    const dishPromisesResult = await Promise.all(dishPromises)

    const invalidDiches = dishPromisesResult.reduce((reducer, current, index) => {

        if( current == null) return [...reducer,dishes[index]]
    
        return reducer
    
       },[])

       if(invalidDiches.length > 0) throw new Error(`Invalid dishes: ${invalidDiches.join(',')}`)


    const newOrder = new Order(orderData)
    return newOrder.save()
}
    
module.exports = {
    get,
    create
}


