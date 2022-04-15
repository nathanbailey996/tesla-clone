import React, {useContext} from "react"
import {AppContext} from "./App.js"


export default function FeaturesSection (props){
    const data = useContext(AppContext)
    return (
        <div className="features-section">
        
        <div className="feature">
        <img src={props.featuredImage1} className="featured-img"/>
       
        <div className="featured-text">
        <div className="featured-text-content"> 
         <h6>{props.featuredTextTitle1}</h6>
       <p> {props.featuredText1}</p>
        
        </div>
        </div>
        </div>
        
        <div className="feature">
        {data.windowSize.width <= 790 && <img src={props.featuredImage2} className="featured-img"/>}
        <div className="featured-text">
        <div className="featured-text-content">
         <h6>{props.featuredTextTitle2}</h6>
      <p>   {props.featuredText2} </p>
      </div>
      </div>
       {data.windowSize.width > 790 && <img src={props.featuredImage2} className="featured-img"/>}
        
        </div>
      
        
        <div className="feature">
        <img src={data.featuredImage3} className="featured-img"/>
        <div className="featured-text">
        <div className="featured-text-content">
         <h6>{data.featuredTextTitle3}</h6>
         <p> {data.featuredText3} </p></div>
        </div>
        </div>
        
        </div>
    )
}