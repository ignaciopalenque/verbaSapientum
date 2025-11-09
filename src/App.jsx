import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Nav.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Principal from './pages/Principal.jsx'
import VideoBackground from './components/Background/VideoBackground.jsx'
import Title from './components/Title/Title.jsx'
function App() {

    const [formularioActual, setformularioActual] = useState('login');
    const verLogin = () => setformularioActual('login');
    const verRegistro = () => setformularioActual('register');
    const verPrincipal = () => setformularioActual('principal');
  return (
    <>
    <div className='h-full w-fulloverflow-hidden'>
    <VideoBackground/>
    <Navbar />
    <Title />
       {formularioActual === 'login' && <Login cambiarAregistro={verRegistro} cambiarAprincipal={verPrincipal} />}
    {formularioActual === 'register' && <Registro cambiarAlogin={verLogin} cambiarAprincipal={verPrincipal} />}
    {formularioActual === 'principal' && <Principal />}
    </div>

 
    
   


    </>
  )
}

export default App
