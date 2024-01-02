const router = require("express").Router();

let Feedback= require("../models/FeedbackModels");

router.route("/add-feedback").post((req,res)=>{
 const name = req.body.name;
    const comment = req.body.comment;
   
   

    const new_feedback = new Feedback({
        name,
        comment,
    
      
    })

    new_feedback.save().then(()=>{
        res.json("Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })
})

    module.exports = router;
