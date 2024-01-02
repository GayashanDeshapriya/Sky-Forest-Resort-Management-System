const router = require("express").Router();
let Driver = require("../models/DriverModel");

//add driver

router.route("/add").post((req, res)=>{

    const driver_id = req.body.driver_id;
    const name = req.body.name;
    const nic = req.body.nic;
    const licence_no = Number(req.body.licence_no);
    const contact_no = Number(req.body.contact_no);
    const address = req.body.address;
    const date = req.body.date;

    const newDriver = new Driver({
        driver_id,
        name,
        nic,
        licence_no,
        contact_no,
        address,
        date,

    })

    newDriver.save().then(()=>{
        res.json("Driver Added")
    }).catch((err)=>{
        console.log(err);

    })


})

//view driver

router.route("/").get((req, res)=>{

    Driver.find().then((drivers)=>{ 
        res.json(drivers)  
    }).catch((err)=>{
        console.log(err)
        
    })

     
})

//update driver

router.route("/update/:id").put(async (req, res)=>{
    let userid = req.params.id;
    const {driver_id, name, nic, licence_no, contact_no, address, date} = req.body;

    const update_driver = {
        driver_id,
        name,
        nic,
        licence_no,
        contact_no,
        address,
        date

    }

    const update = await Driver.findByIdAndUpdate(userid, update_driver)
    .then(()=>{
        res.status(500).send({status: "User Update"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})


//delete driver

router.route("/delete/:id").delete(async (req,res)=>{
    let userid = req.params.id;

    await Driver.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({status: "Driver deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete driver" ,error: err.message});
    })
})

//view by id

router.get('/driver/:id', (req, res) => {
    Driver
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

module.exports = router;

