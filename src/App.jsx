import { Route, Routes } from 'react-router-dom';
import { Navbar } from './assets/components/Navbar'
import { Art } from './assets/components/Art';
import { Home } from './assets/components/Home';
import { Music } from './assets/components/Music';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/music" element={<Music/>} />
          
      </Routes>
      
    </>
  )
}

export default App
