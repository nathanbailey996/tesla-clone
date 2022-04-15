import React, {useContext} from "react"


export default function ReusableStats (props){

    return (
        <div className="car-stat" id="car-features-stats">
<h6>{props.stat}</h6>
<p>{props.statTitle}</p>
</div>
    )
}