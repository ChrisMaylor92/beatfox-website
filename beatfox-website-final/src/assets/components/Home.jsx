import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import beatfoxRows from "../media/beatfox-rows.jpg"
import { Link } from 'react-router-dom';
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";
  import { useState, useEffect, useRef } from "react";

export const Home = () => {
    const panelRef = useRef(null);

    function getScrollPercent() {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }
    
    window.onscroll = () => {
        const panel = panelRef.current;
        if (panel) {
            panel.resize(getScrollPercent());
        }
        console.log(getScrollPercent())
    }
    
    return (
        <div id="home">
        
            <PanelGroup direction="vertical" id="panel-group"> 
                <Panel  ref={panelRef} minSize={7} order={1}  className="panel" id="music-panel">
                    <div id="home-music-container">
                        <video id="home-music-video" autoPlay loop muted src={homeVideoMusic}></video>
                        <Link to="/music" id="home-music-title">
                            <h1 >Music</h1>
                        </Link>
                    </div>
                </Panel>
                <PanelResizeHandle/>
                <Panel minSize={0} order={1} className="panel">
                    <div id="home-art-container">
                        <video id="home-art-video" autoPlay loop muted src={homeVideoArt}></video>  
                        <Link to="/art" >
                            <h1 id="home-art-title">Art</h1>
                        </Link>
                    </div>
                </Panel>
            </PanelGroup>

        </div>
    )
}


