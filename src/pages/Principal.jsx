import React from 'react'
import RegistroCita from './RegistroCita'
import { useState, useEffect} from 'react';
import BtnMenu from '../components/Buttons/BtnMenu';  
import Cita from '../pages/Cita';
export default function Principal() {


  //estados del formulario
  const [formularioActual, setformularioActual] = useState('principal');

  const [citaAleatoria, setCitaAleatoria] = useState({});
  const nuevaCita = () => setformularioActual('nuevaCita');
  const volverAprincpal = () => setformularioActual('principal');
  const token = localStorage.getItem("token");
  const backEnd = import.meta.env.VITE_BACKEND_URL


  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect( () => {
      const obtenerCitaAleatoria = async () => {
       try {
        const response = await fetch(backEnd + "/word/aleatoria", {
            
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            

        });

        if (!response.ok) {
        console.log(response)
        throw new Error("Error en el registro de usuario");
        }

        const data = await response.json();
        setCitaAleatoria(data);
        console.log(data);
        

    } catch (error) {
        console.error("Error:", error);
    }
    }

  obtenerCitaAleatoria();
  }
  
,[] )

  return (
    <>

{formularioActual === 'principal' && (

<div class="flex justify-center">
  <div
  class="form w-[1000px] 
  opacity-90 
  rounded-md shadow-xl 
  overflow-hidden z-[100]  
  cursor-pointer snap-start shrink-0 
  py-5 px-6 bg-[#DFA16A] r 
  flex flex-col items-center justify-center gap-3 transition-all duration-300"
  >
    


  <div class="capitalize  ">
    <p class="text-2xl text-[#7F3D27] text-shadow-sm text-shadow-white pb-5 underline">Menú de opciones disponibles :</p>
    <div class="flex flex-col gap-3">

      <div class="inline-flex gap-5">
   
      </div>

    </div>
  </div>

  <div class="inline-flex gap-5">

    <BtnMenu  texto="Registrar cita celebre" onClick={nuevaCita} />
    <BtnMenu  texto="Mostar todas las citas" onClick={nuevaCita} />
    <BtnMenu  texto="Cerrar sesion" onClick={logout} />

  </div> 
     <Cita cita={citaAleatoria} />

</div>





</div>

)}

{formularioActual === 'nuevaCita' && (
<RegistroCita cambiarAprincipal={volverAprincpal} />
)}
    </>
)
}
