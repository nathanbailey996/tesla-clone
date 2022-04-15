import React from "react";


export default function DashboardItems (props){
    return(
<div className="dashboard-card">
<img src={props.image}/>
<p>{props.firstText}</p>
{ props.secondText && <p>{props.secondText}</p>}
<a href="#">{props.link}</a>

</div>
    )
}