import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import { Handle } from './Handle'
import { FaUpDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import {
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";


export const HomeTwo = ({setHome}) => {
    const panelRef = useRef(null);
    const [musicPercent, setMusicPercent] = useState(100)
    const [artPercent, setArtPercent] = useState(100)
    // console.log(setHome)
    useEffect(() => {
        document.getElementById("homeTwo-music-container").style.opacity = `${musicPercent}%`;
        document.getElementById("video-and-title").style.opacity = `${artPercent}%`;
        // console.log("useEffect firing")
    }, [musicPercent, artPercent])
    
   const reSize = () => {
    const panel = panelRef.current;
    const panelSize = Math.trunc(panel.getSize())
    // console.log(panelSize, "panelsize")

 
    if (panelSize < 48){
        const musicOpacity = panelSize * 2
        // console.log(musicOpacity, "musicOpacity")
        setMusicPercent(musicOpacity)
    }

    if (panelSize > 48){
        const artPanelSize = 100 - panelSize
        const artOpacity = artPanelSize * 2
        // console.log(artOpacity, "artOpacity")
        setArtPercent(artOpacity)
    }
   }

    return (
    <div id="home-two">
        <PanelGroup direction="vertical" id="panel-group"> 
                <Panel onResize={reSize} ref={panelRef} defaultSize={48}  minSize={0} order={1} className="panel" >
                    <div id="homeTwo-music-container">
                        <video id="homeTwo-music-video" autoPlay loop muted src={homeVideoMusic}></video>     
                        <Link to="/music" id="homeTwo-music-title" >
                            <h1 >Music</h1>
                        </Link>
                    </div>
                </Panel>
                <PanelResizeHandle children={<Handle/>} id="homeTwo-pandle" />
                <Panel minSize={2} order={1} className="panel" >
                    <div id="homeTwo-art-container" style={{opacity: "100%"}}>
                    <div id="black-layer"></div>
                        <div id="video-and-title">
                            <video id="homeTwo-art-video" autoPlay loop muted src={homeVideoArt}></video>  
                            <Link  to="/art" id="homeTwo-art-title">
                                <h1>Art</h1>
                            </Link>
                        </div>
                        
                    </div>
                </Panel>
            </PanelGroup>
    </div>
    )
}