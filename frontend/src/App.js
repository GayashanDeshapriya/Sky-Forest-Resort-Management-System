import React from "react";
import "./App.css";
import {BrowserRouter, BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';
import AdminPanel from './components/adminPanel/AdminPanel'; // import the AdminPanel component
import Dashboard from "./pages/Dashboard";




//Inventory
import InventoryMain from "./pages/StockAndInventory/InventoryMain"; 
import InventoryRoom from "./pages/StockAndInventory/InventoryRoom";
import InventoryAddRoom from "./pages/StockAndInventory/InventoryAddRoom";
import InventoryTable from "./pages/StockAndInventory/InventoryTable";
import InventoryRoomManage from "./pages/StockAndInventory/InventoryRoomManage";
import InventoryReport from "./pages/StockAndInventory/InventoryReport";
import InventoryKitchen from "./pages/StockAndInventory/KitchenStock";
import KitchenStockAdd from "./pages/StockAndInventory/kitchenStockAdd";
import KitchenTable from "./pages/StockAndInventory/KitchenTable";
import KitchenStockManage from "./pages/StockAndInventory/KitchenStockManage";
import KitchenReport from "./pages/StockAndInventory/KitchenReport";

//Employee
import EmployeeMain from "./pages/EmployeeManagement/EmployeeMain";
import Employee from "./pages/EmployeeManagement/Employee";
import ManageEmployee from "./pages/EmployeeManagement/ManageEmployee";
import EmpViewReport from "./pages/EmployeeManagement/EmpViewReport";
import Attendance from "./pages/EmployeeManagement/AttendanceAdd";
import AttendanceRecord from "./pages/EmployeeManagement/AttendanceRecord";
import EmpDetailTable from "./pages/EmployeeManagement/EmpDetailTable";
import EmployeeDetailsReport from "./pages/EmployeeManagement/EmployeeReport";
import SalaryCalculator from "./pages/EmployeeManagement/SalaryCal";
import AttendanceReport from "./pages/EmployeeManagement/AttendanceReport";



//Safari
import SafariLandingpage from "./pages/SafariManage/SafariMain";
import AddDriver from "./pages/SafariManage/AddDrivers";
import AddVehicle from "./pages/SafariManage/AddVehicle";
import DriverTable from "./pages/SafariManage/ViewDriverTable";
import VehicleTable from "./pages/SafariManage/ViewVehicleTable";
import DriverManage from "./pages/SafariManage/DriverManage";
import VehicleManage from "./pages/SafariManage/VehicleManage";
import SafariViewReport from "./pages/SafariManage/SafariViewReport";
import DriverReport from "./pages/SafariManage/DriverReport"
import VehicleReport from "./pages/SafariManage/VehicleReport"


//Dayout Manage
import DayOutMain from "./pages/DayOutPackageManage/DayOutMain";
import AddDayOutPackage from "./pages/DayOutPackageManage/AddDayoutPackage";
import ViewDayOutPackage from "./pages/DayOutPackageManage/Product/Items";
import UpdateDayOutPackge from "./pages/DayOutPackageManage/Product/Itemdetail"

//Food Management
import FoodMain from "./pages/FoodManagement/Dashbord"
import ManageFood from "./pages/FoodManagement/AllFood"
import AddFood from "./pages/FoodManagement/AddFood";
import EditFood from "./pages/FoodManagement/EditFood";
import FoodReport from "./pages/FoodManagement/report"


//Customer Management
import AddCustomer from "./pages/CustomerManage/AddCustomer";
import CustomerLandingpage from "./pages/CustomerManage/CustomerMain";
import CustomerDetailTable from "./pages/CustomerManage/ViewCustomerTable";
import ManageCustomer from "./pages/CustomerManage/ManageCustomer";
import CustomerReport from "./pages/CustomerManage/CustomerViewReport"

//Payment 
import AddpaymentDetails from "./pages/PaymentManage/AddpaymentDetails";
import AllPayment from "./pages/PaymentManage/AllPayment";
import PaymentMain from "./pages/PaymentManage/viewDetails";
import EditPayment from "./pages/PaymentManage/EditPayment";
import ReportGen from "./pages/PaymentManage/report";

//Room Manage
import RoomLanding from "./pages/RoomManage/RoomMain";
import AllRoom from "./pages/RoomManage/AllRoom";
import AddRoom from "./pages/RoomManage/AddRoom";
import EditRoom from "./pages/RoomManage/EditRoom";
import RoomReport from "./pages/RoomManage/report"



function App() {
    return (
       <>
       
<div className="App">
      <BrowserRouter>

            <AdminPanel>
                <Routes>

                        <Route path = "/" element = { <Dashboard/> }/>
                        
                        <Route path="/inventoryMain" element={<InventoryMain/>} />
                        <Route path="/inventoryRoom" element={<InventoryRoom/>} />
                        <Route path="/inventoryKitchen" element={<InventoryKitchen/>} />
                        <Route path="/inventoryAddRoom" element={<InventoryAddRoom/>} />
                        <Route path="/inventoryTable" element={<InventoryTable/>} />
                        <Route path="/inventoryRoomManage" element={<InventoryRoomManage/>} />
                        <Route path="/inventoryReport" element={<InventoryReport/>} />
                        <Route path="/inventoryRoomManage/:id" element={<InventoryRoomManage/>} />
                        <Route path="/KitchenStockAdd" element={<KitchenStockAdd/>} />
                        <Route path="/KitchenTable" element={<KitchenTable/>} />
                        <Route path="/KitchenStockManage/:id" element={<KitchenStockManage/>} />
                        <Route path="/KitchenReport" element={<KitchenReport/>} />


                        <Route path="/EmployeeMain" element={<EmployeeMain/>} />
                        <Route path="/Employee" element={<Employee/>} />
                        <Route path="/EmpViewReport" element={<EmpViewReport/>} />
                        <Route path="/Attendance" element={<Attendance/>} />
                        <Route path="/AttendanceRecord" element={<AttendanceRecord/>} />
                        <Route path="/EmpDetailTable" element={<EmpDetailTable/>} />
                        <Route path="/EmpDetailReport" element={<EmployeeDetailsReport/>} />
                        <Route path="/ManageEmployee/:id" element={<ManageEmployee/>} />
                        <Route path="/SalaryCal" element={<SalaryCalculator/>} />
                        <Route path="/AttendanceReport" element={<AttendanceReport/>} />


                        <Route path="/SafariMain" element={<SafariLandingpage/>} />
                        <Route path="/AddDriver" element={<AddDriver/>} />
                        <Route path="/AddVehicle" element={<AddVehicle/>} />
                        <Route path="/DriverTable" element={<DriverTable/>} />
                        <Route path="/VehicleTable" element={<VehicleTable/>} />
                        <Route path="/DriverManage/:id" element={<DriverManage/>} />
                        <Route path="/VehicleManage/:id" element={<VehicleManage/>} />
                        <Route path="/SafariViewReport" element={<SafariViewReport/>} />
                        <Route path="/DriverReport" element={<DriverReport/>} />
                        <Route path="/VehicleReport" element={<VehicleReport/>} />

                        
                        <Route path="/DayOutMain" element={<DayOutMain/>} />
                        <Route path="/AddDayOutPackage" element={<AddDayOutPackage/>} />
                        <Route path="/ViewDayOutPackage" element={<ViewDayOutPackage/>} />
                        <Route path="/UpdateDayOutPackge/:id" element={<UpdateDayOutPackge/>} />


                        <Route path="/FoodMain" element={<FoodMain/>} />
                        <Route path="/AllFood" element={<ManageFood/>} />
                        <Route path="/AddFood" element={<AddFood/>} />
                        <Route path="/EditFood/:id" element={<EditFood/>} />
                        <Route path="/FoodReport" element={<FoodReport/>} />



                        <Route path="/AddCustomer" element={<AddCustomer/>} />
                        <Route path="/CustomerMain" element={<CustomerLandingpage/>} />
                        <Route path="/ViewCustomerTable" element={<CustomerDetailTable/>} />
                        <Route path="/ManageCustomer/:id" element={<ManageCustomer/>} />
                        <Route path="/CustomerReport" element={<CustomerReport/>} />


                        <Route path="/AddPayment" element={<AddpaymentDetails/>} />
                        <Route path="/AllPayment" element={<AllPayment/>} />
                        <Route path="/PaymentMain" element={<PaymentMain/>} />
                        <Route path="/reportGen" element={<ReportGen/>} />
                        <Route path="/EditPayment/:id" element={<EditPayment/>} />



                        <Route path="/RoomMain" element={<RoomLanding/>} />
                        <Route path="/AllRoom" element={<AllRoom/>} />
                        <Route path="/AddRoom" element={<AddRoom/>} />
                        <Route path="/RoomReport" element={<RoomReport/>} />
                        <Route path="/EditRoom/:id" element={<EditRoom/>} />











                </Routes>
                
            </AdminPanel>

    </BrowserRouter>
</div>
       
         </>
    );
}

export default App;
