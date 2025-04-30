
export const Portfolio = () => {
    return(
    <div id="portfolio" >

        <h1 id="portfolio-title">Portfolio</h1>
        <div className='portfolio-card' id="solo-card">
            <div className='portfolio-overlay'></div>
            <h1>Solo</h1>
        </div>
        <div className='portfolio-card' id="collab-card">
            <div className='portfolio-overlay'></div>
            <h1>Collab</h1>
        </div>
        <div className='portfolio-card' id="brand-card">
            <div className='portfolio-overlay'></div>
            <h1>Brand<br></br>Activation</h1>
        </div>
      
    </div>
    ) 
}