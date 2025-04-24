
import { Portfolio } from './Portfolio'
import { Header } from './Header'
import { Gallery } from './Gallery'
import { Bio } from './Bio'
import { useState, useEffect, useRef } from "react";
export const Art = () => {
    
    
    return (
        <div >
            
            <Header />
            <Bio />
            <Portfolio />
            <Gallery /> 
        </div>
        
    )
}