import tagVideo from "../media/jfox-header-square.mp4"

export const Header = () => {
   
    return(
        <div id="header">
            <video id="header-video" autoPlay muted src={tagVideo}></video>
        </div>
    
    ) 
}