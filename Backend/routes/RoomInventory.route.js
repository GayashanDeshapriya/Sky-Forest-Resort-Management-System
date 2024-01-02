const router = require("express").Router();
const { response } = require("express");
let RoomInventory = require("../models/RoomInventoryModel");

//Create Item
router.route("/add-item").post((req,res)=>{

    const itemId=req.body.itemId;
    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;
    const itemQuantity=Number(req.body.itemQuantity);
    const itemCategory=req.body.itemCategory;
    
    
   
    const newInventory = new RoomInventory({

        itemId,
        itemName,
        itemDescription,
        itemQuantity,
        itemCategory,
       
    })

    newInventory.save().then(()=>{
        res.json("New Item Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View item details
router.route("/").get((req,res)=>{
    RoomInventory.find().then((RoomInventory)=>{
        res.json(RoomInventory)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//update item by id
router.route("/update/:id").put(async(req,res)=>{
        let Id=req.params.id;
        const {itemId,itemName,itemDescription,itemQuantity,itemCategory,} =req.body;

        const updateItem={
            itemId,
            itemName,
            itemDescription,
            itemQuantity,
            itemCategory,
        }

        let update;

    update =await RoomInventory.findByIdAndUpdate(Id,updateItem).then(()=>{
        res.status(200).send({status: "Item Update",Item:update});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating" ,error:err.message});
    })
})


// Delete Item
router.route("/delete-item/:id").delete((req, res) => {
    const Id = req.params.id;
    RoomInventory.findByIdAndDelete(Id)
      .then(() => {
        res.json(`Item with id ${Id} deleted successfully`);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });


//get item details an item
  
  router.get('/get/:id', (req, res) => {
    RoomInventory
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
})

  

module.exports = router;