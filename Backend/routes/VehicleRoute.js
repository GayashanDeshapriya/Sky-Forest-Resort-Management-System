const router = require("express").Router();
let Vehicle = require("../models/VehicleModel");

//add vehicle

router.route("/add").post((req, res)=>{

    const vehicle_id = req.body.vehicle_id;
    const registration_no = Number(req.body.registration_no);
    const category = req.body.category;
    const fuel_type = req.body.fuel_type;
    const description = req.body.description;
    const date = req.body.date;

    const newVehicle = new Vehicle({
        vehicle_id,
        registration_no,
        category,
        fuel_type,
        description,
        date,

    })

    newVehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);

    })


})

//view vehicle

router.route("/").get((req, res)=>{

    Vehicle.find().then((vehicles)=>{ 
        res.json(vehicles)  
    }).catch((err)=>{
        console.log(err)
        
    })

     
})

//update vehicle

router.route("/update/:id").put(async (req, res)=>{
    let vehicleid = req.params.id;
    const { vehicle_id, registration_no, category, fuel_type, description, date} = req.body;

    const update_vehicle = {
        vehicle_id,
        registration_no,
        category,
        fuel_type,
        description,
        date, 

    }

    const update = await Vehicle.findByIdAndUpdate(vehicleid, update_vehicle)
    .then(()=>{
        res.status(500).send({status: "Vehicle Update"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})


//delete vehicle

router.route("/delete/:id").delete(async (req,res)=>{
    let vehicleid = req.params.id;

    await Vehicle.findByIdAndDelete(vehicleid)
    .then(()=>{
        res.status(200).send({status: "Vehicle deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete vehicle" ,error: err.message});
    })
})

//view by id 

router.get('/vehicle/:id', (req, res) => {
    Vehicle
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

module.exports = router;

