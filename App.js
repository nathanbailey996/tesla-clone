import './App.css';

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
import CarsData from './CarsData';
import {auth} from "./components/Firebase"

export const AppContext = React.createContext()

export default function App (){
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [windowSize, setWindowSize] = useState(getSize());


    const [isMenushowing, setIsMenushowing] = useState(false)
    const [loginData, setLoginData ] = useState({
        emailAddress:"",
        password:""
    })


    const [isCarSectionShowing, setIsCarSectionShowingCars] = useState([
      {
        name:"Model S",
        isShowing:false
      },
      {
        name:"Model 3",
        isShowing:false
      },
      {
        name:"Model X",
        isShowing:false
      },
      {
        name:"Model Y",
        isShowing:false
      },
      {
        name:"Solar Roof",
        isShowing:false
      },
      {
        name:"Solar Panels",
        isShowing:false
      },{
        name:"Main",
        isShowing:true
      },{
        name:"Account",
        isShowing:false
      }
])



function showCarSections (name){
  
setIsCarSectionShowingCars(prevCarSection=>prevCarSection.map(car=>{
  return name === car.name? {...car, isShowing:true} : {...car, isShowing:false}
}))
setIsMenushowing(false)

 
setIsLoginShown(false)
}

const [user, setUser] = useState("")

  
    // changing to the create section when the create account button is clicked
    const [createAnAccount, setCreateAnAccount] = useState(false)

    function changeToCreateAccount (){
      setCreateAnAccount(true)
    }

    function changeToSignIn (){
      setCreateAnAccount(false)
    }
    
     const [yourData, setYourData] = useState(
         JSON.parse(localStorage.getItem("loginData")) || []
     )


     useEffect(()=>{
      // setYourData(JSON.parse(localStorage.getItem("loginData")) || [])
 const savedLoginData = JSON.parse(localStorage.getItem("loginData"))
 if(savedLoginData){
 auth.signInWithEmailAndPassword(savedLoginData.emailAddress, savedLoginData.password)
     
     }},[] )
    
     useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log("the user is>> ", authUser)
      
        if(authUser){
setUser(authUser)      
        }else{
          setUser(null)
        }
      })
      
      }, [])
     

    // handling the login feature
     function handleLogin (event){
        event.preventDefault()
        function success(){
          auth.signInWithEmailAndPassword(loginData.emailAddress, loginData.password)
          .then((auth)=>{
            console.log("the user is >>" + auth)
          })
          .catch(error=> alert(error.message))
localStorage.setItem("loginData", JSON.stringify(loginData))
          setCreateAnAccount(false)

        }
        loginData.emailAddress && loginData.password? success(): alert("please enter a valid email address and password")
        }
        
        // handling the creating account feature
     function handleSubmit (event){
        event.preventDefault()
        function success(){
          auth.createUserWithEmailAndPassword(loginData.emailAddress, loginData.password)
          .then((auth)=>{
            console.log("the user is >>" + auth)
        })
    .catch(error=> alert(error.message))
        }
        localStorage.setItem("loginData", JSON.stringify(loginData))
          setCreateAnAccount(false)
        loginData.emailAddress && loginData.password? success(): alert("please enter a valid email address and password")
        }
  
   
     
    // changing to and from the login screen
    const [isLoginShown, setIsLoginShown] = useState(false)

    function toggleLogin (){
      setIsLoginShown(prevlogin=>!prevlogin)
    }
    
// handling the sign out
    function signOutFunction (){
    auth.signOut()
    localStorage.removeItem("loginData")
    }
  
    const carElements =CarsData.map(car=>{
      return <AppContext.Provider value={{...car, windowSize:windowSize}}> 
      {isCarSectionShowing[car.carNumber].isShowing &&<CarsSection/>}
      </AppContext.Provider>
    })
    
    
    return (
        <div>
        <Header
       setIsMenushowing={setIsMenushowing}
        Logo={Logo} toggleLogin={toggleLogin}
         windowSize={windowSize}
      showCarSections={showCarSections}
         />
     
     {isCarSectionShowing[6].isShowing && <div>
          <Main
          name="Model 3"
       carName="Model 3"
       orderText="Order online for"
       orderTextLink="Touchless delivery"
       image={Model3}
       leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        isArrowShowing={true}
        showCarSections={showCarSections}
        />
        <Main 
        name="Model Y"
         carName="Model Y"
       orderText="Order online for"
       orderTextLink="Touchless delivery"
       image={ModelY}
       leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        showCarSections={showCarSections}
        />
        <Main
        name="Model S"
         carName="Model S"
       orderText="Order online for"
       orderTextLink="Touchless delivery"
       image={ModelS}
       leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        showCarSections={showCarSections}
        />
        <Main
        name="Model X"
         carName="Model X"
       orderText="Order online for"
       orderTextLink="Touchless delivery"
       image={ModelX}
       leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        showCarSections={showCarSections}
        />
          <Main
          name="Solar Panels"
         carName="Solar Panels"
       orderText="Lowest Cost Solar Panels In America"
       image={SolarPanel}
       leftButton="ORDER NOW"
        rightButton="LEARN MORE"
        showCarSections={showCarSections}
        />
        <Main
        name="Solar Roof"
         carName="Solar Roof"
       orderText="Produce Clean Energy From Your Roof"
       image={SolarRoof}
       leftButton="ORDER NOW"
        rightButton="LEARN MORE"
        showCarSections={showCarSections}
        />
        <Main
         carName="Accessories"
         image={Accessories}
       leftButton="SHOP NOW"
       isFooterShowing={true}
       showCarSections={showCarSections}
        />
        </div>}
      <HidingMenu
       setIsMenushowing={setIsMenushowing}
       toggleLogin={toggleLogin}
        isMenushowing={isMenushowing} 
          windowSize={windowSize}
          showCarSections={showCarSections}
          />
      
     {isLoginShown === true && createAnAccount === false && user === null?<Login 
      windowSize={windowSize}
     setLoginData={setLoginData}
      loginData={loginData}
      handleSubmit={handleLogin}

      changeToCreateAccount={changeToCreateAccount}
     
      /> : ""}


{ isLoginShown  === true && createAnAccount === false && user !== null? <LoginScreen 
 windowSize={windowSize}
username={yourData.emailAddress} 
ReserveACar={ReserveACar} 
TeslaSidewayView={TeslaSidewayView}
OrderSolarPanels={OrderSolarPanels}
signOutFunction={signOutFunction}
/> : ""}

{isLoginShown === true && createAnAccount && user === null && <CreateAccount 
 windowSize={windowSize}
changeToSignIn={changeToSignIn}
setLoginData={setLoginData} 
loginData={loginData}
handleSubmit={handleSubmit}
/>}

{carElements}



        </div>
        
    )
}