import React from 'react'
import { useState, useEffect } from 'react';
export default function RegistroFrase({cambiarAprincipal}) {

const backEnd = import.meta.env.VITE_BACKEND_URL
const token = localStorage.getItem("token");
const usuario = localStorage.getItem("user");
const [formularioActual, setformularioActual] = useState('regcita');
const confirmacionNuevaCita = () => setformularioActual('ok');


    useEffect(() => {
    if (formularioActual === 'ok') {
      const timer = setTimeout(() => {
        cambiarAprincipal()
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [formularioActual, cambiarAprincipal]);
  const guardarCita = async(event) => {

    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const cita = document.getElementById("cita").value;
    const descripcion = document.getElementById("descripcion").value;
    const autor = document.getElementById("autor").value;
    const categoria = document.getElementById("categoria").value;
    

    console.log(backEnd)




    try {
        const response = await fetch(backEnd + "/word/registro", {
            
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({titulo,cita,descripcion,autor,categoria,usuario})

        });

        if (!response.ok) {

        throw new Error("Error en el registro de la cita");
        }

        const data = await response.json();
        confirmacionNuevaCita()

        

    } catch (error) {
        console.error("Error:", error);
    }


  }

  return (
<>

{formularioActual === 'regcita' && (
<div class="flex justify-center">
<div
  class="form w-[600px] opacity-90 rounded-md shadow-xl overflow-hidden z-[100]  cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] r flex flex-col items-center justify-center gap-3 transition-all duration-300"
>
    


  <div class="capitalize  ">
    <p class="text-2xl text-[#7F3D27] text-shadow-sm text-shadow-white pb-5">Registrar cita celebre</p>
    <form action="" class="flex flex-col gap-3">

        <div class="flex flex-col items-start w-full">
        <label for="titulo" class="text-sm text-[#7F3D27] font-semibold "
          >titulo</label
        >
        <input
          type="text"
          id="titulo"
          placeholder="Ingrese el titulo de la cita aquí"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div> 

      <div class="flex flex-col items-start w-full">
        <label for="autor" class="text-sm text-[#7F3D27] font-semibold "
          >autor</label
        >
        <input
          type="text"
          id="autor"
          placeholder="Ingrese el nombre del autor aquí"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>

      <div class="flex flex-col items-start w-full">
        <label for="categoria" class="text-sm text-[#7F3D27] font-semibold "
          >categoria</label
        >
        <input
          type="text"
          id="categoria"
          placeholder="Ingrese la categoria de la cita aquí"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>

      <div class="flex flex-col items-start w-full">
        <label for="cita" class="text-sm text-[#7F3D27] font-semibold"
          >Cita</label
        >
        <textarea
          cols={"500"}
          type="text"
          id="cita"
          placeholder="Ingrese la cita aqui"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>

      <div class="flex flex-col items-start w-full">
        <label for="descripción" class="text-sm text-[#7F3D27] font-semibold"
          >Descripción</label
        >
        <textarea
          cols={"500"}
          id="descripcion"
          type="text"
          placeholder="Ingrese la decripcion de la cita aqui"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>



      <div class="inline-flex gap-5">
        <button
          class="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#D9D9D9] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
          onClick={guardarCita}
        >
          Añadir Cita
        </button>
        <button
          class="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#7F3D27] bg-[#D9D9D9] shadow-[#7F3D27] shadow-lg"
       >
          Volver atras
        </button>
      </div>
    </form>
  </div>
</div>


</div>
)}




{formularioActual === 'ok' && (
  <div className="flex flex-col items-center justify-center">
    <h1
      className="text-[#3ea157]
      text-shadow-md text-shadow-white
      text-center
      text-xl"
      style={{ fontFamily: 'Macondo, monospace, sans-serif',  fontSize: 'clamp(1rem, 4vw, 4rem)'}}
    >
      "Cita registrada con exito"
    </h1>
  </div>
)}
 
    </>
      )
}
