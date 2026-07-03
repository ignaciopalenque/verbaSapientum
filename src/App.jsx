import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Nav.jsx'
import Principal from './pages/Principal.jsx'
import VideoBackground from './components/Background/VideoBackground.jsx'
import Title from './components/Title/Title.jsx'
import BtnMenu from './components/Buttons/BtnMenu';  
import Footer from './components/Footer/Footer';

function App() {

    const [formularioActual, setformularioActual] = useState('inicio');
    const verPrincipal = () => setformularioActual('principal');
  return (
    <>
<div className="relative w-full h-[100dvh]">

      <div className="fixed inset-0 -z-10 overflow-hidden ">
      <VideoBackground />
      </div>
      
      <div className="fixed top-0 left-0 right-0 ">
      <Navbar />


      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto lg:overflow-hidden xl:overflow-hidden ">

          <Title />
          <div className="w-[370px] h-[60vh] relative

          lg:w-full
          lg:overflow-hidden 
          lg:h-full
          xl:overflow-hidden

          xl:w-full m-1 ">

              {formularioActual === 'inicio' && <BtnMenu texto="Abre tu mente al conocimiento" onClick={verPrincipal} />}
              {formularioActual === 'principal' && <Principal />}

          </div>

      </div>  

 <footer className="w-full fixed  bottom-0 left-0  ">

    <Footer />

    </footer>
  
    </div>

   
 
    
   


    </>
  )
}

export default App
