const router = require("express").Router();
let attendance = require("../models/attendanceModel");

//Add attendance
router.route("/add-attendance").post((req,res)=>{
    const empid = Number (req.body.empid);
    const date = req.body.date;
    const shift = req.body.shift;

    const new_attendance = new attendance({
        empid,
        date,
        shift,

    })

    new_attendance.save().then(()=>{
        res.json("Attendance Added")
     }).catch((err)=>{
        console.log(err);
    })
})

//View item details
router.route("/").get((req,res)=>{
    attendance.find().then((attendance)=>{
        res.json(attendance)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;


