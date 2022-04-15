import React, {useContext} from "react"
import CarsSectionFirstScreen from "./CarsSectionFirstScreen"
import FeaturesSection from "./FeaturesSection.js"
import Slideshow from "./Slideshow.js"
import CarStats from "./CarStats"
import ElectricPower from "./ElectricPower.js"
import CarOptions from "./CarOptions.js"
import CarSectionFooter from "./CarSectionFooter.js"
import {AppContext} from "./App.js"


export default function CarsSection (props){
        const data = useContext(AppContext)

    return(
        <div>
           
            <CarsSectionFirstScreen
            image={data.RedModel3Home? data.RedModel3Home : data.image}
     
    />

{data.acceleration && <div className="interior-text-container">
    <h6>Interior of the Future</h6>
    </div>}
    <img src={data.NewInterior} className="new-interior-img"/>

    <Slideshow />

{data.horsePower && <FeaturesSection
        featuredTextTitle1={data.featuredTextTitle1}
featuredText1={data.featuredText1}
featuredImage1={data.featuredImage1}
featuredTextTitle2={data.featuredTextTitle2}
featuredText2={data.featuredText2}
featuredImage2={data.featuredImage2}
featuredTextTitle3={data.featuredTextTitle3}
featuredText3={data.featuredText3}
featuredImage3={data.featuredImage3}
windowSize={data.windowSize}

        />}

<CarStats
        BlueModelS={data.BlueModelS}
        descriptionText={data.descriptionTextStat}
        descriptionTitle={data.descriptionTitleStat}
        />

<ElectricPower/>

<div className="car-options-container">
<CarOptions
title={data.carTitle}
text={data.carTitle === "Solar Roof" || "Solar Panels"? "Final cleanup is completed before system activation":  "Dual motor all wheel drive unlocks more range than any other vehicle in our current lineup with insane power and maximun control"}

/>
<CarOptions
title={data.carTitle === "Solar Roof" || "Solar Panels" ? data.carTitle: `${data.careTitle} Plaid`}
text={data.carTitle === "Solar Roof" || "Solar Panels"? "Our integrated design enables quick tile and Powerwall installation" : "Maintain 1,000+ horse power all the way to 200mph with Tri-motor all wheel drive featuring torque vectoring and three independant carbon-sleeved rotors"}

/>
        </div>
        <div className="smallprint-container"><p className="car-options-smallprint p">*With rollout subtracted</p></div>


        <CarStats
        carTitle={data.carTitle}
        BlueModelS={data.EfficiencyImage}
        descriptionText={data.descriptionTextEfficiency}
        descriptionTitle={data.descriptionTitleEfficiency}
        blackColor={data.blackColor}
        whitecolor={data.whitecolor}
        />
{data.horsePower && <FeaturesSection
        featuredTextTitle1={"Relentless Performance"}
featuredText1={"Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."}
featuredImage1={data.FeaturesRedWheel}
featuredTextTitle2={"Optimized Aerodynamics"}
featuredText2={`Attention to detail on all exterior surfaces makes ${props.carTitle} the most aerodynamic production car on Earth.`}
featuredImage2={data.FeaturesRedRear}
featuredTextTitle3={"Refined Styling"}
featuredText3={"An iconic silhouette meets refreshed, elegant proportions."}
featuredImage3={data.FeaturesRedSideView}
        />}

        <CarSectionFooter  />

        </div>
        
        
    )
}