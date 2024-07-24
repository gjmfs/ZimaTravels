import React from "react"
import {Cards, Service,Carousel, SpecificAspects, Subscription} from "./components/Body"
import './Home.css'

export const Home=()=>{
     
    return(
        <div className="bg">
        <Carousel/>
        <Service/>
        <Cards/>
        <SpecificAspects/>
        <Subscription/>
        </div>
    )
}