import { Route, Routes } from 'react-router-dom';
import { Navbar } from './assets/components/Navbar'
import { Art } from './assets/components/Art';
import { HomeTwo } from './assets/components/HomeTwo';
import { Music } from './assets/components/Music';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomeTwo/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/music" element={<Music/>} />
          
      </Routes>
      
    </>
  )
}

export default App
