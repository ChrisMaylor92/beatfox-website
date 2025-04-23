import homeVideoArt from "../media/home-art.mp4"
import homeVideoMusic from "../media/home-music.mp4"
import beatfoxRows from "../media/beatfox-rows.jpg"
import { Link } from 'react-router-dom';
import {
    ImperativePanelHandle,
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";

export const Home = () => {
    const ref = useRef<ImperativePanelHandle>(null);
    const runTest = () => {
        const panel = ref.current;
        console.log(panel.getSize());
      };


    function getScrollPercent() {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }
    document.getElementById("music-panel")

    function logResize(event) {
        console.log(Panel.getSize())
    }
    // function runTest() {
    //     console.log(Panel.getSize())
    // }
    window.onscroll = () => {
        console.log(getScrollPercent())
    }
    
    
    return (
        <div id="home">
            {/* <div id="home-test">
                <div id="text">
                    <h1></h1>
                </div>
                <div id="para-vid-1">
                    <video  autoPlay loop muted src={homeVideoMusic}></video>
                </div>
                
                
                <video id="page-2-img" autoPlay loop muted src={homeVideoArt}></video> 
                
            </div> */}
            
            {/* <div id="para-vid-2">
                <video  autoPlay loop muted src={homeVideoArt}></video> 
            </div> */}
            {/* <div id="music-page">
                <video id="home-music-video-test" autoPlay loop muted src={homeVideoMusic}></video>
                <div id="block">
                    <video id="home-art-video-test" autoPlay loop muted src={homeVideoArt}></video>  

                </div>
            </div> */}

            <PanelGroup direction="vertical" id="panel-group"> 
                <Panel ref={ref} minSize={7} order={1} className="panel" onResize={logResize} onClick={runTest} id="music-panel">
                    <div id="home-music-container">
                        <video id="home-music-video" autoPlay loop muted src={homeVideoMusic}></video>
                        <Link to="/music" id="home-music-title">
                            <h1 >Music</h1>
                        </Link>
                    </div>

                </Panel>
                <PanelResizeHandle id="handle"/>
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


