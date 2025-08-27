import React from 'react'
import RegistroCita from './RegistroCita'
import { useState } from 'react';
import BtnMenu from '../components/Buttons/BtnMenu';  
export default function Principal() {


  //estados del formulario
  const [formularioActual, setformularioActual] = useState('principal');
  const nuevaCita = () => setformularioActual('nuevaCita');


  return (
    <>

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
    <BtnMenu  texto="Cerrar sesion" onClick={nuevaCita} />

  </div>  
</div>





</div>


    </>
)
}
