import tagVideo from "../media/jfox-header-square.mp4"
import { Link } from 'react-scroll';
export const Header = () => {
   
    return(
        <div id="header" name="art-header">
            <video id="header-video" autoPlay muted src={tagVideo}></video>
        </div>
    
    ) 
}