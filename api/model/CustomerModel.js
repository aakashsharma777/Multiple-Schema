const mongoose = require('mongoose')
//var schema=mongoose.Schema

const CustomerSchema=mongoose.Schema({
    firstName: { 
      type: String
    },
    lastName: { 
      type: String      
    }
})

const UserSchema = mongoose.Schema({
  bio: { 
    type: String
  },
  Customer:[CustomerSchema]
})

module.exports=mongoose.model('User',UserSchema)

