import beatfoxRows from "../media/beatfox-rows.jpg"
import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import { Navbar } from './Navbar'
import japan from "../media/collab-japanese.png"
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";
  import { FaArrowsUpDown } from "react-icons/fa6";
  import { TbArrowsMoveVertical } from "react-icons/tb";
  import { RiExpandUpDownLine } from "react-icons/ri";
  import { FaUpDown } from "react-icons/fa6";






export const HomeTwo = () => {
    const panelRef = useRef(null);

    useEffect(() => {
        const panel = panelRef.current;
        
    }, [])
    
   

    return (
    <div id="home-two">
        <PanelGroup direction="vertical" id="panel-group"> 
                <Panel ref={panelRef} defaultSize={48}  minSize={0} order={1} className="panel" >
                    <div id="homeTwo-music-container">
                        <video id="homeTwo-music-video" autoPlay loop muted src={homeVideoMusic}></video>     
                        <Link to="/music" id="homeTwo-music-title" >
                            <h1 >Music</h1>
                        </Link>
                    </div>
                </Panel>
      
                <PanelResizeHandle children={<FaUpDown id="pandle"/>} id="homeTwo-pandle" />
                <Panel minSize={2} order={1} className="panel" >
                    <div id="homeTwo-art-container">
                        <div id="video-and-title">
                            <video id="homeTwo-art-video" autoPlay loop muted src={homeVideoArt}></video>  
                            <Link to="/art" id="homeTwo-art-title">
                                <h1>Art</h1>
                            </Link>
                        </div>
                        
                    </div>
                </Panel>
            </PanelGroup>
       
        
    </div>
    )
}