import React from "react";

export default class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            time:""
        }
        this.buildTime();
        this.intervalID = setInterval(()=>this.buildTime(),1000)
    }

    buildTime = () => {
        let t = new Date();
        t = t.toLocaleTimeString();
        t = t.split(":")
        t = t.splice(0,3).join(":")
        this.setState({time:t})
    }



    render(){
        const date = new Date();
        const day = date.toUTCString().split(' ').slice(1,4).join(' ');
        return(<div>
            {day}   |   {this.state.time}
        </div>) 
    }
}