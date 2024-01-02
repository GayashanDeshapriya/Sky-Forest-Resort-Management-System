const router = require("express").Router();
const KitchenStock = require("../models/kitchenStock");
const kitchenStock = require("../models/kitchenStock");



//Add a stock item
router.route("/add-stock-item").post((req,res)=>{
    const Date = req.body.Date;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const itemPrice = req.body.itemPrice;
    const itemDescription = req.body.itemDescription;
    const itemCategory = req.body.itemCategory;
    

    const new_kitchenStock = new kitchenStock({
        Date,
        itemId,
        itemName,
        itemPrice,
        itemDescription,
        itemCategory
        
    })

    new_kitchenStock.save().then(()=>{
        res.json("Kitchen Stock Item Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//View all stock item
router.route("/").get((req,res)=>{
    kitchenStock.find().then((kitchenStock)=>{
        res.json(kitchenStock)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//View a stock item
  
router.get('/get/:id', (req, res) => {
    KitchenStock
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

//Update a stock item
router.route("/update/:id").put(async (req,res)=>{
    let Id = req.params.id;
    const { Date,itemId,itemName,itemPrice,itemDescription,itemCategory} = req.body;
    
    const update_item = {
        Date,
        itemId,
        itemName,
        itemPrice,
        itemDescription,
        itemCategory
 }

 const update = await kitchenStock.findByIdAndUpdate(Id, update_item)
 .then(()=>{
    res.status(200).send({status: "item updated", kitchenStock: update})  
 }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })


})

//Delete a item
router.route("/delete/:id").delete(async (req,res)=>{
    const Id = req.params.id;
    kitchenStock.findByIdAndDelete(Id)
    .then(()=>{
        res.json(`Item with Id ${Id} delete sucsessfully`)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({error:err.message});
    });
});

module.exports = router;


