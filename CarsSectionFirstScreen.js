import React,{useContext} from "react"
import ReusableStats from "./ReusableStats"
import {AppContext} from "./App.js"


export default function CarsSectionFirstScreen (props){
    const data = useContext(AppContext)
    const styles ={
        backgroundImage: `url(${props.image})`
    }
    const color={
        color:data.carTitle === "Model 3"? "white": ""
    }
console.log(data.windowSize.width)

    return(
        <div className="car-component" style={styles}>
     <h2 style={color}>{data.carTitle}</h2>
     <p>{data.carText}</p>

<div className="car-stats-container">

{/* <div className="car-stat">
    <reusableStats
    stat={props.range}
    statTitle={"Range (EPA est.)"}
/>
    <reusableStats
    stat={props.acceleration}
    statTitle={"0-60mph*"}
/>
    <reusableStats
    stat={props.topSpeed}
    statTitle={"Top Speed"}
/>
    <reusableStats
    stat={props.horsePower}
    statTitle={"Peak Power"}
/>
</div> */}

{  <div className="car-stat-container">
<div className="car-stat">
<h6>{data.horsePower? data.horsePower: "Beautiful solar"}</h6>
<p>{data.horsePower? "Peak Power": "Without Compromise"}</p>
 </div> 
 
<div className="car-stat">
<h6>{data.range? data.range: data.outageProtection}</h6>
<p>{data.range? "Range (EPA est.)" : "Outage Protection"}</p>
</div>

<div className="car-stat">
<h6>{data.acceleration? data.acceleration: data.tileWarranty}</h6>
<p>{data.acceleration? "0-60mph*": "Tile Warranty"}</p>
</div>

{data.windowSize.width > 800 && data.topSpeed &&<div className="car-stat">
<h6>{data.topSpeed}</h6>
<p>{data.carTitle === "Model Y"? "Cargo Space": "Top Speed"}</p>
</div>}
</div>}


<button className="button car-stats-btn">order now</button>





</div>
        </div>
    )
} 