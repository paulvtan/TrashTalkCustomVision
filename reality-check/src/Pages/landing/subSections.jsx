import React from "react"
import Timer from "./../../Components/timer/index";
import center from '../../res/main.png'
import community from '../../res/goal.png'
import weather from '../../res/weather_below.png'
import './subSections.scss'

export const LandingCenter = ({children}) => {
    return <div className="center">
        <img style={{width:"714px", height: "628px"}} src={center} />
    </div>
}

export const LandingCommunity = () => {
    return <div className="community">
        <img src={community} />
    </div>
}

export const LandingWeather = () => {
    return <div className="weather">
        <Timer />
        <img src={weather} />
    </div>

}