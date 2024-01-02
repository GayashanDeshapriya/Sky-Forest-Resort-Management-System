//Import dependencies
const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const bodyParser=require("body-parser");
const cors=require("cors");
const router = require("./routes/book-routes");
//Create an express app
const app=express();

//connect to db
const PORT =process.env.PORT|9005;

app.use(express.json());
app.use(cors()) ;

const RoomInventoryRouter=require("./routes/RoomInventory.route.js");
app.use("/RoomInventory",RoomInventoryRouter);

const kitchenStockeRouter=require("./routes/kitchenStock.js");
app.use("/KitchenStock",kitchenStockeRouter);

const employeeRouter=require("./routes/employee.js");
app.use("/employee",employeeRouter);

const attendanceRouter=require("./routes/attendanceRoute.js");
app.use("/attendance",attendanceRouter);

const safariDriverRouter=require("./routes/DriverRoute.js");
app.use("/Driver",safariDriverRouter);

const safariVehicleRouter=require("./routes/VehicleRoute.js");
app.use("/Vehicle",safariVehicleRouter);

const dayoutRouter=require("./routes/DayoutRoute.js");
app.use("/DayOut",dayoutRouter);

const FoodRouter=require("./routes/foods");
app.use("/food",FoodRouter);

const CustomerRouter=require("./routes/Customer");
app.use("/customer",CustomerRouter);

const PaymentRouter=require("./routes/payments");
app.use("/Payment",PaymentRouter);

const RoomRouter=require("./routes/Room");
app.use("/Room",RoomRouter);

app.use("/books", router); 


mongoose.connect(process.env.MONGO_URI)
.then(()=>console .log ('MongoDB is Connected.'))
.catch((err)=> console.log(err));


app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));


