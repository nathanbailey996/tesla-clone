import React, {useState, useEffect} from "react"

import Header from "./components/Header.js"
import Main from "./components/Main.js"
import HidingMenu from "./components/HidingMenu.js"
import Login from "./components/Login.js"
import ModelS from "./images/model-s.jpeg"
import Model3 from "./images/model-3.jpeg"
import ModelY from "./images/model-y.jpeg"
import ModelX from "./images/model-x.jpeg"
import SolarPanel from "./images/solar-panel.jpeg"
import SolarRoof from "./images/solar-roof.jpeg"
import Accessories from "./images/accessories.jpeg"
import Logo from "./images/logo.svg"
import LoginScreen from "./components/LoginScreen.js"
import CreateAccount from './components/CreateAccount';
import ReserveACar from "./images/reserve-a-car.jpeg"
import TeslaSidewayView from "./images/tesla-sideway-view.jpeg"
import OrderSolarPanels from "./images/order-solar-panels.jpeg"
import CarsSection from './CarsSection';
import Game from "./images/game.jpeg"
import Connected from "./images/connected.jpeg"
import Audio from "./images/audio.jpeg"
import NewInterior from "./images/new-interior.jpeg"
import TeslaDisplay from "./images/tesla-display.jpeg"
import BlueModelS from "./images/blue-model-s.jpeg"
import FeaturesRedWheel from "./images/features-red-wheel.jpeg"
import FeaturesRedRear from "./images/features-red-rear.jpeg"
import FeaturesRedSideView from "./images/features-red-side-view.jpeg"
import ElectricImage from "./images/electric-powertrain.jpeg"
import EfficiencyImage from "./images/model-s-efficiency.jpeg"

import WhiteModelX from "./images/white-model-x.png"
import WhiteModelXWheel from "./images/white-model-x-wheel.jpeg"
import WhiteModelXRear from "./images/white-model-x-rear.jpeg"
import WhiteModelXSideView from "./images/white-model-x-side-view.jpeg"
import RedModel3Home from "./images/red-model-3-home.jpeg"
import RedModel3Mountains from "./images/red-model-3-mountains.jpeg"
import blueModel3 from "./images/blue-model-3.jpeg"
import RedModelY from "./images/red-model-y.jpeg"

import BlueModelY from "./images/blue-model-y.jpeg"
import ModelYInterior from "./images/tesla-model-y-interior.jpeg"

import FooterImage from "./images/footer-image.jpeg"
import SolarRoofCarSection from "./images/solar-roof-car-section.jpeg"
import solarRoofApp from "./images/solar-roof-app.jpeg"
import solarRoofPayLess from "./images/solar-roof-pay-less.jpeg"

import solarPanelsBattery from "./images/solar-panels-battery.jpeg"

const CarsData = [
    {
        carNumber:"0",
        carTitle:"Model S",
        carText:"Plaid",
        range:"637km",
        acceleration:"2.1s",
        topSpeed:"322km/h",
        horsePower:"1021hp",
        longAcceleration:"9.23s",
        image:Model3,
        NewInterior:NewInterior,
        
        featuredTextTitle1:"Stay Connected",
        featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
        featuredImage1:Connected,
        
        featuredTextTitle2:"Immersive Sound",
        featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
        featuredImage2:Audio,
        
        featuredTextTitle3:"Wireless Gaming",
        featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
        featuredImage3:Game,
        
        TeslaDisplay:TeslaDisplay,
        BlueModelS:BlueModelS,
        
        ElectricImage:ElectricImage,
        
        descriptionTextStat:"Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.",
        descriptionTitleStat:"Beyond Ludicrous",
        blackColor:"black",
        whitecolor:"white",
        
        electricDescription:"Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
        
        EfficiencyImage:EfficiencyImage,
        
        descriptionTextEfficiency:"With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.",
        descriptionTitleEfficiency:"Designed for Efficiency",
        
        FeaturesRedWheel:FeaturesRedWheel,
        FeaturesRedRear:FeaturesRedRear,
        FeaturesRedSideView:FeaturesRedSideView,
        FooterImage:FooterImage, 
    }, {
        carNumber:"1", 
        carTitle:"Model 3",
        range:"358mi",
        acceleration:"3.1s",
        topSpeed:"322km/h",
        horsePower:"1020hp",
        longAcceleration:"9.9s",
        image:ModelX,
        RedModel3Home:RedModel3Home,
        NewInterior:NewInterior,
        
        featuredTextTitle1:"Stay Connected",
        featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
        featuredImage1:Connected,
        
        featuredTextTitle2:"Immersive Sound",
        featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
        featuredImage2:Audio,
        
        featuredTextTitle3:"Wireless Gaming",
        featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
        featuredImage3:Game,
        
        TeslaDisplay:TeslaDisplay,
        BlueModelS:RedModel3Mountains,
        
        ElectricImage:ElectricImage,
        
        descriptionTextStat:"Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.",
        descriptionTitleStat:"Quickest Acceleration",
        
        electricDescription:"Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
        
        EfficiencyImage:blueModel3,
        
        descriptionTextEfficiency:"Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.",
        descriptionTitleEfficiency:"Dual Motor",
        
        FeaturesRedWheel:WhiteModelXWheel,
        FeaturesRedRear:WhiteModelXRear,
        FeaturesRedSideView:WhiteModelXSideView,
        FooterImage:FooterImage,
    }, {
        carNumber:"2", 
        carTitle:"Model X",
  carText:"Plaid",
  range:"333mi",
  acceleration:"2.5s",
  topSpeed:"322km/h",
  horsePower:"1020hp",
  longAcceleration:"9.9s",
  image:ModelX,
  NewInterior:NewInterior,
  
  featuredTextTitle1:"Stay Connected",
  featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  featuredImage1:Connected,
  
  featuredTextTitle2:"Immersive Sound",
  featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
  featuredImage2:Audio,
  
  featuredTextTitle3:"Wireless Gaming",
  featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
  featuredImage3:Game,
  
  TeslaDisplay:TeslaDisplay,
  BlueModelS:WhiteModelX,
  
  ElectricImage:ElectricImage,
  
  descriptionTextStat:"With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.",
  descriptionTitleStat:"Beyond Ludicrous",
  
  electricDescription:"Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
  
  EfficiencyImage:WhiteModelX,
  
  descriptionTextEfficiency:"With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.",
  descriptionTitleEfficiency:"Designed for Efficiency",
  
  FeaturesRedWheel:WhiteModelXWheel,
  FeaturesRedRear:WhiteModelXRear,
  FeaturesRedSideView:WhiteModelXSideView,
  FooterImage:FooterImage,
    }, {
        carNumber:"3", 
        carTitle:"Model Y",
  range:"330mi",
  acceleration:"3.1s",
  topSpeed:"76cu ft",
  horsePower:"1020hp",
  longAcceleration:"9.9s",
  image:BlueModelY,
  NewInterior:NewInterior,
  
  featuredTextTitle1:"Stay Connected",
  featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  featuredImage1:Connected,
  
  featuredTextTitle2:"Immersive Sound",
  featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
  featuredImage2:Audio,
  
  featuredTextTitle3:"Wireless Gaming",
  featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
  featuredImage3:Game,
  
  TeslaDisplay:TeslaDisplay,
  BlueModelS:RedModelY,
  
  ElectricImage:ElectricImage,
  
  descriptionTextStat:"Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.",
  descriptionTitleStat:"Dual Motor",
  
  electricDescription:"Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
  
  EfficiencyImage:ModelYInterior,
  
  descriptionTextEfficiency:"With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.",
  descriptionTitleEfficiency:"Built Around the Driver",
  
  FeaturesRedWheel:WhiteModelXWheel,
  FeaturesRedRear:WhiteModelXRear,
  FeaturesRedSideView:WhiteModelXSideView,
  FooterImage:FooterImage,
    }
    , {
        carNumber:"4", 
        carTitle:"Solar Roof",
  tileWarranty:"25 Year",
  outageProtection:"24/7",
  
  image:SolarRoof,
  NewInterior:SolarRoofCarSection,
  
  featuredTextTitle1:"Stay Connected",
  featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
  featuredImage1:Connected,
  
  featuredTextTitle2:"Immersive Sound",
  featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
  featuredImage2:Audio,
  
  featuredTextTitle3:"Wireless Gaming",
  featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
  featuredImage3:Game,
  
  TeslaDisplay:TeslaDisplay,
  BlueModelS:SolarRoof,
  
  ElectricImage:solarRoofPayLess,
  
  descriptionTextStat:"Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.",
  descriptionTitleStat:"A Beautiful Roof",
  
  electricDescription:"Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.",
  
  EfficiencyImage:solarRoofApp,
  
  descriptionTextEfficiency:"With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.",
  descriptionTitleEfficiency:"Monitor and Optimize",
  
  FeaturesRedWheel:WhiteModelXWheel,
  FeaturesRedRear:WhiteModelXRear,
  FeaturesRedSideView:WhiteModelXSideView,
  FooterImage:FooterImage,
    }
    
    
    , {
        carNumber:"5", 
        carTitle:"Solar Panels",
   tileWarranty:"25 Year",
   outageProtection:"24/7",
   
   image:SolarPanel,
   NewInterior:SolarRoofCarSection,
   
   featuredTextTitle1:"Stay Connected",
   featuredText1:"Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
   featuredImage1:Connected,
   
   featuredTextTitle2:"Immersive Sound",
   featuredText2:"A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
   featuredImage2:Audio,
   
   featuredTextTitle3:"Wireless Gaming",
   featuredText3:"Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
   featuredImage3:Game,
   
   TeslaDisplay:TeslaDisplay,
   BlueModelS:solarPanelsBattery,
   
   ElectricImage:solarRoofPayLess,
   
   descriptionTextStat:"Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.",
   descriptionTitleStat:"A Beautiful Roof",
   
   electricDescription:"Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.",
   
   EfficiencyImage:solarRoofApp,
   
   descriptionTextEfficiency:"With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.",
   descriptionTitleEfficiency:"Monitor and Optimize",
   
   FeaturesRedWheel:WhiteModelXWheel,
   FeaturesRedRear:WhiteModelXRear,
   FeaturesRedSideView:WhiteModelXSideView,
   FooterImage:FooterImage,
    }
]

export default CarsData