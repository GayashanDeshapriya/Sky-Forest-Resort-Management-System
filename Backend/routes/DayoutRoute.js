
const router = require("express").Router();
const {response} = require("express");
let Package = require("../models/DayoutModel");

//add books
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const category = req.body.category;
    const description = req.body.description;
    const price = Number(req.body.price);
    const available = Boolean(req.body.available);
    const image = req.body.image;

    const newPackage = new Package({
        name,
        category,
        description,
        price,
        available,
        image
    })
    newPackage.save().then(()=>{
        res.json("Package Added")
    }).catch((err)=>{
        console.log(err);
    })
})
//get all packages
router.route("/").get((req,res)=>{
    Package.find().then((packages)=>{
        res.json(packages)
    }).catch((err)=>{
        console.log(err)
    })
})

//update package by id
router.route("/update/:id").put(async (req,res)=>{
    let Id=req.params.id;
    const {name,category,description,price,available,image}=req.body;

    const updatePackage = {
        name,
        category,
        description,
        price,
        available,
        image
    }
    let update;

    update = await Packages.findByIdAndUpdate(Id,updatePackage).then(()=>{
        res.status(200).send({status:"Package Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

    //delete package 
    router.route("/delete/:id").delete( (req,res)=>{
        const Id=req.params.id;
    
        Package.findByIdAndDelete(Id).then(()=>{
            res.json('Package deleted with id ${Id}');
        })
        .catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete package",error:err.message})
        });
    });
    //get one package

    router.get('/get/:id',(req,res) =>{
        Package.findById(req.params.id).then(response => res.json(response))
        .catch(err => res.status(400).json('Error: '+err));
    })


module.exports = router;
