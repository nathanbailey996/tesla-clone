import React, {useContext} from "react"
import ReusableStats from "./ReusableStats"
import {AppContext} from "./App.js"

export default function CarStats(props){
    const data = useContext(AppContext)
    const styles={
        backgroundImage:`url(${props.BlueModelS})`
    }

const backgroundColor={
    backgroundColor: props.blackColor? "black": ""
}

const color={
    color:props.whitecolor? "white": ""
}


    return (
        <div>
        <div className="car-stats-container2" style={styles}>

            

{data.acceleration && <div className="car-stats-section">
<ReusableStats 
stat={data.horsePower}
statTitle={"Peak Power"}
/>
<ReusableStats 
stat={data.longAcceleration}
statTitle={"@155 mph 1/4 mile"}
/>
<ReusableStats 
stat={data.acceleration}
statTitle={"0-60mph*"}
/>
</div>}
</div>
<div className="car-description-container" style={backgroundColor}>
    <div className="description-title">
       {data.horsePower?  <p className="p" style={color}>{data.carTitle === "Model 3" || "Model Y"? "All-Wheel Drive" : "Plaid"}</p>:
        <p className="p" style={color}>{"Design"}</p>
       }
        <h6 className="h6" style={color}>{props.descriptionTitle}</h6>
       <div className="description-btn-container"> <button className="button description-btn">Order Now</button></div>
        </div>
        <div className="description-text" style={color}>{props.descriptionText}</div>
</div>

        </div>
    )
}