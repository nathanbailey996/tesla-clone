import React, {useContext} from "react"
import {AppContext} from "./App.js"

export default function CarSectionFooter (props){
    const data = useContext(AppContext)

    return (
        <div className="car-section-footer">
            <div className="car-section-footer-content-container">
                <div className="car-section-footer-content-left">
                    <h6>Order {data.carTitle}</h6>
                    <div className="car-section-btn-container">
                        <button className="button car-section-footer-btn">Order Now</button>
                        <button className="button car-section-footer-btn">Compare</button>
                         </div>
                        </div>
                        <img src={data.FooterImage} className="footer-img"/>
            </div>

<div className="footer-container">
            <footer className="car-section-footer-element">
           
            <ul>
                <li><a href="#">Tesla © 2022</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Engage</a></li>
                <li><a href="#">Locations</a></li>
            </ul>
            </footer>
            </div>

             </div>
    )
} 