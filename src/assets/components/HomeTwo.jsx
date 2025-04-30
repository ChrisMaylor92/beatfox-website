import beatfoxRows from "../media/beatfox-rows.jpg"
import { useState, useEffect, useRef } from "react";
export const HomeTwo = () => {


    useEffect(() => {
        const container = document.getElementById("img-container")

        function getScrollPercent() {
            const st = 'scrollTop'
            const sh = 'scrollHeight';
           
            return (container[st]) / ((container[sh]) - container.clientHeight) * 100;
        }

        container.onscroll = () => {
            console.log(container.scrollTop, "scrollTop")
            console.log(container.scrollHeight, "scrollHeight")
            console.log(container.clientHeight, "clientHeight")
            console.log(getScrollPercent(), "percent")
            
        }
    }, [])
    
   

    return (
    <div id="home-two">
        <div id="img-container">
            <img src={beatfoxRows} id="test-img"></img>
            <img src={beatfoxRows} id="test-img-2"></img>
        </div>
        
    </div>
    )
}