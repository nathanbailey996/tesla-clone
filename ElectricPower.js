import React, {useContext} from "react"
import {AppContext} from "./App.js"


export default function ElectricPower (props){
    const data = useContext(AppContext)
    return(
        <div className="electric-container">
            <div className="electric-content">
                <h6 className="h6">{data.horsePower? "Electric Powertrain" : "Pay Less For Electricity"}</h6>
                <p className="p">{data.electricDescription}</p>
            </div>
            <img src={data.ElectricImage} className="electric-img"/>
            
        </div>
    )
}