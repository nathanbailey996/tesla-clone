import React, {useState} from "react"


export default function HidingMenu (props){
    const {height, width} = props.windowSize
  
    const menuItems = ["Trade-In", "Test Drive", "Cybertruck", "Roadster", "Semi", "Charging", "Powerwall", "Commercial Energy", "Utilities", "Find Us", "Support", "Investor Relations"]
    const menuItemsElements = menuItems.map(item=>{
        return <li key={item}>{item}</li>
    })
    
    const className= props.isMenushowing? "show" : "menu-container"
    
    
    return(
        <div className={className}>
        <button className="close-btn" onClick={()=>{
      props.setIsMenushowing(prevValue=> !prevValue)  
    }}>
    <div className="close-line1"></div>
    <div className="close-line2"></div>
    
    </button>
        <ul className="hiding-menu-menu">
        {width < 900 &&<div className="middle-menu">
    <ul className="menu-small-screen">
    {width < 400 &&  <div className="right-menu-account-container">
    <li>Shop</li>
    <li onClick={()=>{
        props.showCarSections("Account")
        props.toggleLogin()
    }}>Account</li>
    </div>}
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
    }}>Solar Roof</li>
    <li onClick={()=>{
        props.showCarSections("Solar Panels")
    }}>Solar Panels</li>
    </ul>
    </div>}
        {menuItemsElements}
        <li className="united-states"> United States</li>
        <li className="english-item">English</li>
        </ul>
        </div>
    )
}