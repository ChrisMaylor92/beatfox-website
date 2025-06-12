import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react'
import { Link } from 'react-scroll';

export const Portfolio = () => {
    const [soloIsOpen, setSoloIsOpen] = useState(false)
    const [collabIsOpen, setCollabIsOpen] = useState(false)
    const [brandIsOpen, setBrandIsOpen] = useState(false)

    return(
    <div id="portfolio" name="portfolio">
        {soloIsOpen? 
            <div className='portfolio-card-open' id="solo-card" name="solo">
                <div className='portfolio-overlay'></div>
                <h1>Solo</h1>
                <div className="portfolio-button" >
                        {soloIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setSoloIsOpen(!soloIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="solo" smooth={true} duration={400} offset={-70} onClick={() => setSoloIsOpen(!soloIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        : 
            <div className='portfolio-card-closed' id="solo-card" name="solo">
                <div className='portfolio-overlay'>
                </div>
                <h1>Solo</h1>
                <div className="portfolio-button" >
                        {soloIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setSoloIsOpen(!soloIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="solo" smooth={true} duration={400} offset={-70} onClick={() => setSoloIsOpen(!soloIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        }
        {collabIsOpen?
            <div className='portfolio-card-open' id="collab-card" name="collab">
                <div className='portfolio-overlay'></div>
                <h1>Collab</h1>
                <div className="portfolio-button" >
                        {collabIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setCollabIsOpen(!collabIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="collab" smooth={true} duration={400} offset={-70} onClick={() => setCollabIsOpen(!collabIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        :
            <div className='portfolio-card-closed' id="collab-card" name="collab">
                <div className='portfolio-overlay'></div>
                <h1>Collab</h1>
                <div className="portfolio-button" >
                        {collabIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setCollabIsOpen(!collabIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="collab" smooth={true} duration={400} offset={-70} onClick={() => setCollabIsOpen(!collabIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        }
        
        {brandIsOpen?
            <div className='portfolio-card-open' id="brand-card" name="brand">
                <div className='portfolio-overlay'></div>
                <h1>Brand<br></br>Activation</h1>
                <div className="portfolio-button" >
                        {brandIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setBrandIsOpen(!brandIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="brand" smooth={true} duration={400} offset={-70} onClick={() => setBrandIsOpen(!brandIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        :
            <div className='portfolio-card-closed' id="brand-card" name="brand">
                <div className='portfolio-overlay'></div>
                <h1>Brand<br></br>Activation</h1>
                <div className="portfolio-button" >
                        {brandIsOpen? <Link to="portfolio" smooth={true} offset={-70} duration={100} onClick={() => setBrandIsOpen(!brandIsOpen)} ><FaArrowUp className="portfolio-arrow"/></Link> : <Link to="brand" smooth={true} duration={400} offset={-70} onClick={() => setBrandIsOpen(!brandIsOpen)}><FaArrowDown className="portfolio-arrow"/></Link>}
                </div>
            </div>
        }
        
      
    </div>
    ) 
}