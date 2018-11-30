const bycript = require('bcrypt')
const saltRounds = 10

module.export={
     create(password){
         return new Promise((resolve,reject) =>{
             bycript.hash(password,saltRounds, function(err,hash){
                    if(error) return reject(err)
                    resolve(hash)
             })
         })
     },
     verify(password,hash){
         return new Promise((resolve,reject)=> {
            bycript.compare(password,hash,(err,same) =>{
                if(err) return reject(err)
                resolve(same)
            })
         })
     }
}