
const router = require("express").Router();
let customer = require("../models/CustomerModel");



router.route("/add-customer").post((req,res)=>{
    const ID = Number(req.body.ID);
 const name = req.body.name;
    const address = req.body.address;
    const Email = req.body.Email;
    const phone = Number(req.body.phone);
   

    const new_customer = new customer({
        ID,
        name,
        address,
        Email,
        phone,
      
    })

    new_customer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{
    customer.find().then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userid = req.params.id;
    const { ID, name,  address, Email, phone, } = req.body;
    
    const update_customer = {
        ID,
        name,
        address,
        Email,
        phone,
      
 }

 const update = await customer.findByIdAndUpdate(userid, update_customer)
 .then(()=>{
    res.status(200).send({status: "customer updated"})  
 }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })


})

router.route("/delete/:id").delete(async (req,res)=>{
    let userid = req.params.id;
    
    await customer.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({status: "customer deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete customer",error: err.message});
    })
})

//get item details an item
  
router.get('/get/:id', (req, res) => {
    customer
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

module.exports = router;
