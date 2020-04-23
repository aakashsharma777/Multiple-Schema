var User=require('../model/CustomerModel') // schema



module.exports.register=(request,response)=>{
   var bio=request.body.bio;
   var Customer=request.body.Customer;
   new User ({
       bio:bio,
       Customer:Customer
   }).save().then((data)=>{
       console.log(data)
      
   })
}

module.exports.update=(request,response)=>{
    //var firstName=request.body.firstName;
    //var lastName=request.body.lastName;
    var bio=request.body.bio
   // var Customer=request.body.Customer
    User.findOneAndUpdate(bio,{$push:{"Customer":request.body.Customer}}, function(err,result) {
        if(err){
            console.log(err);
            return response.send(err);
        }
        return response.json(result);

    })
}

module.exports.delete=(request,response)=>{
    //
    //var lastName=request.body.lastName;
    var bio_id=request.body.bioid
    var Customer_id=request.body.Customerid;
   // var Customer=request.body.Customer
    
   User.updateOne({ '_id':bio_id},{$pull: { "Customer": {'_id':Customer_id}}}).then((data)=>{
       console.log(data)
     })
   

   
   
   
   // User.findOneAndUpdate(bio,{$pull:{"Customer":{'firstName':firstName}}}, function(err,result) {
    //     if(err){
    //         console.log(err);
    //         return response.send(err);
    //     }
    //     return response.json(result);

    // })
}

module.exports.populate=(request,response)=>{
 User.findById('5e6386fa5d64b41b5c5fa8b1').populate('firstname').exec(function(err, users) {
    if(err) 
    console.log(err);
    //this will log all of the users with each of their posts 
    else 
    console.log(users);
  }) 

}

