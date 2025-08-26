import React from 'react'

export default function RegistroFrase() {
  return (
<>

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
          type="text"
          placeholder="Ingrese la decripcion de la cita aqui"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>



      <div class="inline-flex gap-5">
        <button
          class="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#D9D9D9] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
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


 
    </>
      )
}
