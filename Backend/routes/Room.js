const router = require("express").Router();
let Room = require("../models/Room");

//Create room package
router.route("/add").post((req,res)=>{

    const room_no = req.body.room_no;
    const catagory = req.body.catagory;
    const price  = req.body.price ;
    const description  = req.body.description ;
    const type = req.body.type;
    const facilities = req.body.facilities;
    const duration = req.body.duration;

    const newRoom = new Room({

        room_no,
        catagory,
        price,
        description,
        type,
        facilities,
        duration

    })

    newRoom.save().then(()=>{
        res.json("New Room package Created")
    }).catch((err)=>{
        console.log(err);
    })

})

//View rooms
router.route("/").get((req,res)=>{

    Room.find().then((Rooms)=>{
        res.json(Rooms)
    }).catch((err)=>{
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) =>{
    let packageid = req.params.id;
    const {room_no,catagory,price,description,type,facilities,duration} = req.body;

    const updateRoom = {
        room_no,
        catagory,
        price,
        description,
        type,
        facilities,
        duration
    }

    const update = await Room.findByIdAndUpdate(packageid, updateRoom)
    .then(()=>{
        res.status(200).send({status: "package Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete package  
router.route("/delete/:id").delete(async (req, res) => {
    let packageid = req.params.id;

    await Room.findByIdAndDelete(packageid)
    .then(() => {
        res.status(200).send({status: "Package deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete package",error:err.message})
    })
})

//View user by ID
router.route("/get/:id").get(async(req, res) =>{
    let packageid = req.params.id;
    const package = await Room.findById(packageid)
    .then((Room)=>{
        res.status(200).send({status: "user fetched", Room})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})



module.exports = router;