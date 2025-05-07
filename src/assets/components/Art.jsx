
import { Portfolio } from './Portfolio'
import { Header } from './Header'
import { Gallery } from './Gallery'
import { Bio } from './Bio'
import { useState, useEffect, useRef } from "react";
import { Navbar } from './Navbar';

export const Art = () => {
    
    
    return (
        <div >
            <Navbar />
            <Header />
            <Bio />
            <Portfolio />
            <Gallery /> 
        </div>
        
    )
}