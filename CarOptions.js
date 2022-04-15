import React, {useContext} from "react"
import ReusableStats from "./ReusableStats.js"
import {AppContext} from "./App.js"

export default function CarOptions (props){
    const data = useContext(AppContext)
    return (
        <div className="car-options">
        <p className="car-options-title h6" >{props.title}</p>
        <p className="car-options-text p">{props.text}</p>
       {data.horsePower && <div className="car-options-stats">
        <ReusableStats
        stat={data.acceleration}
        statTitle={"0-60mph*"}
    />
        <ReusableStats
        stat={data.range}
        statTitle={"Range (EPA est)"}
        />
        <ReusableStats
        stat={data.horsePower}
        statTitle={"Peak Power"}
               />
        
        
        </div>}
        </div>
    )
}