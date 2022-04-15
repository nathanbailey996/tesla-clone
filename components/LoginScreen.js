import React, {useState} from "react"
import DashboardItems from "./DashboardItems"
import { MdKeyboardArrowDown } from "react-icons/md"


export default function LoginScreen (props){
const {width, height} = props.windowSize


    const[isDropdownShown, setIsDropdownShown] = useState(false)
    const className= !isDropdownShown && width <= 660 ? "dropdown-not-shown": ""
   
    function showDropdown(){
        setIsDropdownShown(prevValue=>!prevValue)
    }

 const buttonClass = isDropdownShown? "dropdown-btn dropdown-btn-shown": "dropdown-btn"
  


    return (
   <div className="login-screen">
       <div className="dashboard-navigation">
<ul>
    <li style={{display:"flex", alignItems:"center"}}><a href="#">Dashboard</a> {width <= 660 &&  <button className={buttonClass} onClick={showDropdown}><MdKeyboardArrowDown/></button>}</li>
  <div className={className} >
    <li><a href="#">Profile Settings</a></li>
    <li><a href="#">Payment Method</a></li>
    <li><a href="#">Charging</a></li>
    <li><a href="#">Loot Box</a></li>
    <li><a href="#">Order History</a></li>
    <li><a href="#" onClick={props.signOutFunction}>Sign Out</a></li>
    </div>
</ul>
</div>

       <div className="dashboard-content">
           <h1>Dashboard</h1>
           <div className="dashboard-items-container">
       <DashboardItems
  image={props.OrderSolarPanels}
  firstText="Order Tesla Solar"
  secondText="Produce energy to power you Tesla life"
  link="View Solar"
  />
  <DashboardItems
  image={props.ReserveACar}
  firstText="Reserve a Car"
  secondText="Browse our models"
  link="Shop Now"
/>
  <DashboardItems
  image={props.TeslaSidewayView}
  firstText="Purchased a car from a third party?"
  link="Add"
  />
  </div>
       </div>



   </div>
    )
}