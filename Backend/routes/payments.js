const router = require("express").Router();
const { response } = require("express");
let Payment = require("../models/payment");

//Create User
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const packages = req.body.packages;
    const price = req.body.price;
    const cardnumber = req.body.cardnumber;
    const MM = req.body.MM;
    const YY = req.body.YY;
    const cvv = req.body.cvv;

    const newPayment = new Payment({

        name,
        packages,
        price,
        cardnumber,
        MM,
        YY,
        cvv

    })

    newPayment.save().then(()=>{
        res.json("New User Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Users
router.route("/").get((req,res)=>{

    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {name,
        packages,
        price,
        cardnumber,
        MM,
        YY,
        cvv} = req.body;

    const updatePayment = {
        name,
        packages,
        price,
        cardnumber,
        MM,
        YY,
        cvv
    }

    const update = await Payment.findByIdAndUpdate(userId, updatePayment)
    .then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete User by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Payment.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message})
    })
})

//View user by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Payment.findById(userId)
    .then((payment)=>{
        res.status(200).send({status: "user fetched", payment})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})


module.exports = router;