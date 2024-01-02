const router = require("express").Router();
let employee = require("../models/employee");


//Add a employee
router.route("/add-employee").post((req,res)=>{
    const empid = req.body.empid;
    const empname = req.body.empname;
    const NIC = req.body.NIC;
    const address = req.body.address;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const jobtype = req.body.jobtype;
    const basicsalary = Number(req.body.basicsalary);

    const new_employee = new employee({
        empid,
        empname,
        NIC,
        address,
        email,
        phone,
        jobtype,
        basicsalary
    })

    new_employee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//View all employee
router.route("/").get((req,res)=>{
    employee.find().then((employee)=>{
        res.json(employee)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//View a employee

router.get('/get/:id', (req, res) => {
    employee
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})


//Update a employee
router.route("/update/:id").put(async (req,res)=>{
    let userid = req.params.id;
    const {empid, empname, NIC, address, email, phone, jobtype, basicsalary} = req.body;
    
    const update_employee = {
        empid,
        empname,
        NIC,
        address,
        email,
        phone,
        jobtype,
        basicsalary
 }

 const update = await employee.findByIdAndUpdate(userid, update_employee)
 .then(()=>{
    res.status(200).send({status: "employee updated", employee: update})  
 }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })


})

//Delete a Employee
router.route("/delete/:id").delete(async (req,res)=>{
    const Employeeid = req.params.id;
    employee.findByIdAndDelete(Employeeid)
    .then(()=>{
        res.json(`Employee with Id ${Employeeid} delete sucsessfully`)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({error:err.message});
    });
});

module.exports = router;