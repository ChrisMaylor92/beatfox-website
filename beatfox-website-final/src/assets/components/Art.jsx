
import { Portfolio } from './Portfolio'
import { Header } from './Header'
import { Gallery } from './Gallery'
import { Bio } from './Bio'

export const Art = () => {
    return (
        <div>
            <Header />
            <Bio />
            <Portfolio />
            <Gallery /> 
        </div>
        
    )
}