import beatfoxRows from "../media/beatfox-rows.jpg"
import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import japan from "../media/collab-japanese.png"
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
export const HomeTwo = () => {


    useEffect(() => {
        const container = document.getElementById("scroll-container")

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
        <div id="scroll-container">


            
            <div id="homeTwo-music-container">
                <video id="homeTwo-music-video" autoPlay loop muted src={homeVideoMusic}></video>
                <Link to="/music" id="homeTwo-music-title" >
                    <h1 >Music</h1>
                </Link>
            </div>
            <div id="homeTwo-art-container">
                <video id="homeTwo-art-video" autoPlay loop muted src={homeVideoArt}></video>  
                <Link to="/art" >
                    <h1 id="homeTwo-art-title">Art</h1>
                </Link>
            </div>   
        </div>
        
    </div>
    )
}