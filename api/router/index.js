var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/register',user.register)
router.post('/update',user.update)
router.post('/delete',user.delete)
router.get('/populate',user.populate)

module.exports=router;
