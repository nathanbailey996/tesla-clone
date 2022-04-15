import React from "react"

export default function Header (props){
const {height, width} = props.windowSize

  return(
    <nav className="navbar">
    <div className="navbar-logo"onClick={()=>{
        props.showCarSections("Main")
    }}>
    <img src={props.Logo} />
   </div>
    { width > 900 && <div className="middle-menu">
    <ul className="menu">
    <li onClick={()=>{
        props.showCarSections("Model S")
    }}>Model S</li>
    <li onClick={()=>{
        props.showCarSections("Model 3")
    }}>Model 3</li>
    <li onClick={()=>{
        props.showCarSections("Model X")
    }}>Model X</li>
    <li onClick={()=>{
        props.showCarSections("Model Y")
    }}>Model Y</li>
    <li onClick={()=>{
        props.showCarSections("Solar Roof")
    }}> Solar Roof</li>
    <li onClick={()=>{
        props.showCarSections("Solar Panels")
    }}>Solar Panels</li>
 
    </ul>
    </div>}
    <div className="right-menu">
    <ul className="menu">
     {width > 400 &&  <div className="right-menu-account-container">
    <li>Shop</li>
    <li onClick={()=>{
        props.showCarSections("Account")
        props.toggleLogin()
    }}>Account</li>
    </div>}
    <li onClick={()=>{
      props.setIsMenushowing(prevValue=> !prevValue)  
    }}>Menu</li>
    </ul>
    </div>
    
    </nav>
  )
}