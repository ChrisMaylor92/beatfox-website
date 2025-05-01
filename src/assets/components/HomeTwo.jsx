import beatfoxRows from "../media/beatfox-rows.jpg"
import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import japan from "../media/collab-japanese.png"
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";



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
        {/* <PanelGroup direction="vertical" id="panel-group"> 
                <Panel  defaultSize={50} minSize={7} order={1}  className="panel" >
                    <div id="homeTwo-music-container">
                        <video id="homeTwo-music-video" autoPlay loop muted src={homeVideoMusic}></video>     
                        <Link to="/music" id="homeTwo-music-title" >
                            <h1 >Music</h1>
                        </Link>
                    </div>
                </Panel>
                <PanelResizeHandle id="homeTwo-pandle"/>
                <Panel minSize={0} order={1} className="panel" >
                    <div id="homeTwo-art-container">
                        <video id="homeTwo-art-video" autoPlay loop muted src={homeVideoArt}></video>  
                        <Link to="/art" id="homeTwo-art-title">
                            <h1>Art</h1>
                        </Link>
                    </div>
                </Panel>
            </PanelGroup> */}
        <div id="scroll-container">

            


            
                    
        <img id="test-img-1" src={beatfoxRows}/>
        {/* <img id="test-img-2" src={beatfoxRows}/> */}
        </div>
        
    </div>
    )
}