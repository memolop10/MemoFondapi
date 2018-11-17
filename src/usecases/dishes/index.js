const Dish = require('../../models/dish').model

async function get(){
   const allDishes = await Dish.find({}).exec()
   return allDishes 
}


async function create(dishData){

    //sacando dish de dishdata
    //const { name } = dishData

    //buscamos el name deDish y regresa una promesa
    const existingDishes = await Dish.find({ ...dishData }).exec()

    const dishExists = existingDishes.length > 0


    if (dishExists) throw new Error('Dish already exists')

//nuevo modelo   //constructor
    const dish = new Dish(dishData)
                //forza que sea una promesa
    const dishCreate = await dish.save()
    return dishCreate

}

    async function del (id){
       return Dish.findByIdAndDelete(id).exec()
    }

    function getById (id){
        return Dish.findById(id).exec()
    }


module.exports = {
    get,
    create,
    del,
    getById
}