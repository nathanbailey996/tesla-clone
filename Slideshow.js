import React, {useState, useContext} from "react"
import {AppContext} from "./App.js"


export default function Slideshow (props){
    const data = useContext(AppContext)

    const [slideshowCounter, setSlideshowCounter] = useState(1)
    
    const styles={
        backgroundImage:`url(${data.TeslaDisplay})`
    }
    
    const slideShown ={
        transform:'translateX(0)'
    }
    
    const slideNotShown = {
         transform:'translate(2000px)'
    }
    
//     function SwitchSlidesAdd(){
//         if(slideshowCounter<=3){
//             setSlideshowCounter(prevCount=> prevCount +1)
//         }
//     }

// function switchSlidesMinus (){
//     setSlideshowCounter(prevCounter=>{
//         return prevCounter>= 1? prevCounter -1: prevCounter
//     })
// }

//     console.log(slideshowCounter)
    
 
    
    
    return (
        <div className="slideshow-container">
        <div className="slideshow1" style={slideshowCounter === 1? slideShown: slideNotShown}>
        <div className="slideshow" style={styles}>
           {/* <div className="slideshow-btn-container">
           <button className="slideshow-btn" >v</button>
           <button className="slideshow-btn slideshow-btn2" >v</button>
        </div> */}
    </div>
    <div className="slideshow-content-container">
    <div className="slideshow-content">
    <h6 className="h6-white">Cinematic Experience</h6>
    <p className="p">A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
    </div>
    </div>
    </div>
    
    {/* <div className="slideshow2" style={slideshowCounter === 2? slideShown: slideNotShown}>
        <div className="slideshow"  style={styles}>
           <div className="slideshow-btn-container">
           <button className="slideshow-btn" >v</button>
           <button className="slideshow-btn slideshow-btn2" >v</button>
        </div>
    </div>
    <div className="slideshow-content-container">
    <div className="slideshow-content">
    <h6>Cinematic Experience</h6>
    <p>A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
    </div>
    </div>
    </div>
    
    <div className="slideshow3" style={slideshowCounter === 3? slideShown: slideNotShown}>
        <div className="slideshow"  style={styles}>
           <div className="slideshow-btn-container">
           <button className="slideshow-btn" >v</button>
           <button className="slideshow-btn slideshow-btn2" >v</button>
        </div>
    </div>
    <div className="slideshow-content-container">
    <div className="slideshow-content">
    <h6>Cinematic Experience</h6>
    <p>A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
    </div>
    </div>
    </div> */}
       
        </div>
    )
}