import logo from "../media/fox-logo.jpg"

export const Navbar = () => {
    return (
        <nav id="navbar-container" >
            <img src={logo} id="nav-logo"></img>
            <h1><a href="/">BeatFox</a></h1> 
            
        </nav>
    )
}