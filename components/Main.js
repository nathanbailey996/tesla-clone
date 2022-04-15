import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"


export default function Main (props){
   const descriptionLink =  props.orderTextLink && <a>{props.orderTextLink}</a>
   
   const BackgroundImage ={
      backgroundImage: `url(${props.image})`
   }

    
    return (
        <section className="main-container" style={BackgroundImage} >
        
        
        <div className="car-name-container">
        <h6>{props.carName}</h6>
        <p>{props.orderText} {descriptionLink}</p>
        </div>

    <div className="main-navigation-container">
        <div className="main-buttons-container">
        <button className="button main-custom-btn"  onClick={()=>{
        props.showCarSections(props.name)
    }}>{props.leftButton}</button>
      { props.rightButton && <button className="button main-inventory-btn"  onClick={()=>{
        props.showCarSections(props.name)
    }}>{props.rightButton}</button>}
        
     </div>
     { props.isArrowShowing && <button className="arrow-down" ><MdKeyboardArrowDown /></button>}
        </div>
 
         
        {props.isFooterShowing && <footer className="footer">
        <ul>
        <li><a>Tesla © 2022</a></li>
        <li><a>Privacy & Legal</a></li>
        <li><a>Contact</a></li>
        <li><a>Careers</a></li>
        <li><a>News</a></li>
        <li><a>Engage</a></li>
        <li><a>Locations</a></li>
        </ul>
        
        </footer>}
     
        </section>
    )
}