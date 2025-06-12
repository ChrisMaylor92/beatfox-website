
import bioFace from "../media/bio-face-mobile.jpg"
import bioMic from "../media/bio-mic-mobile.jpg"
import bioCan from "../media/bio-can-mobile.jpg"
import logo from "../media/fox-logo.jpg"
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react'
import { Link } from 'react-scroll';

export const Bio = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
    <div id="bio" name="bio">
        <div id="bio-container" style={{height: isOpen? "auto" : "50vh"}}>
            
            <div id="dropdown-face">
                <img src={bioFace} className="bio-img"></img>
                <h1 id="bio-title">Artist Bio</h1>
                <p>J.Fox is a London-based Graffiti and Calligraphy artist whose work bridges the rhythm of music with the fluidity of art.</p>                    
            
            </div>
            {isOpen ? 
            <div id="dropdown-mic" >
                <img src={bioMic} className="bio-img"></img>
                <p>Starting from a musical background, J.Fox believes that flow is everything, whether it’s the beat of a song or the movement of a brush. His canvases can range from abandoned buildings and vehicles to wooden boards and street walls, embracing the urban environment as an ever-evolving canvas.</p>    
            </div> : <></> }
            
            {isOpen ? 
            <div id="dropdown-can">
                <img src={bioCan} className="bio-img"></img>
                <p>His calligraphy, an art form rooted in precision and elegance, adds a refined contrast to the raw energy of his graffiti. J.Fox seamlessly merges the expressive freedom of street art with the meticulous beauty of traditional script, creating contrasting dynamic pieces that tell a story in every stroke.</p>
            </div> : <></> }
            
            <div id="bio-button" >
                    {isOpen? <Link to="art-header" smooth={true} offset={-70} duration={100} onClick={() => setIsOpen(!isOpen)} ><FaArrowUp id="bio-arrow"/></Link> : <Link to="bio" smooth={true} duration={400} offset={-70} onClick={() => setIsOpen(!isOpen)}><FaArrowDown id="bio-arrow"/></Link>}
            </div>
        </div>
    </div>
    ) 
}