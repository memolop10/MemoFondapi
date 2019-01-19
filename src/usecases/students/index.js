const Student = require('../../models/student').model

async function get(){
   const allStudents = await Student.find({}).exec()
   return allStudents
}


async function create(studentData){    

    //sacando student de dishdata
    //const { name } = dishData

    //buscamos el name deDish y regresa una promesa
    const existingStudents = await Student.find({ ...studentData }).exec()
    console.log(existingStudents)
    const studentExists = existingStudents.length > 0
    if (studentExists) throw new Error('Student already exists')
//nuevo modelo   //constructor
    const student = new Student(studentData)
                //forza que sea una promesa
    const studentCreate = await student.save()
    return studentCreate

}

async function find({studentData}){
    console.log(studentData)
    return Student.findOne({studentData}).exec()
}

    async function del (id){
        //exec ejecuta 
       return Student.findByIdAndDelete(id).exec()
    }

    // function getById (id){
    //     return Student.findById(id).exec()
    // }


module.exports = {
    get,
    create,
    del,
    find
}