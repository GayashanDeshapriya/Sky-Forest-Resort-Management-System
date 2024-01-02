const router = require("express").Router();
const { response } = require("express");
let Food = require("../models/food");

//Create User
router.route("/add").post((req,res)=>{

    const menuno= req.body.menuno;
    const food1 = req.body.food1;
    const food2 = req.body.food2;
    const food3 = req.body.food3;
    const price = req.body.price;
    
    const newfood = new Food({

        menuno,
        food1,
        food2,
        food3,
        price,


    })

    newfood.save().then(()=>{
        res.json("New food added")
    }).catch((err)=>{
        console.log(err)
    })

})

//View foods
router.route("/").get((req,res)=>{

    Food.find().then((foods)=>{
        res.json(foods)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {
        menuno,
        food1,
        food2,
        food3,
        price,} = req.body;

    const updatefood = {
        menuno, 
        food1,
        food2,
        food3,
        price,
    }

    const update = await Food.findByIdAndUpdate(userId, updatefood)
    .then(()=>{
        res.status(200).send({status: " Updated successfully"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete User by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Food.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "food deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete food",error:err.message})
    })
})

//View user by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const food = await Food.findById(userId)
    .then((food)=>{
        res.status(200).send({status: "user fetched", food})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})


module.exports = router;