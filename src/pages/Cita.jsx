import React from 'react'

export default function Cita({cita}) {
  return (
  <>

  <div class="flex justify-center">
<div
  class="form w-[1000px] opacity-90 rounded-md  overflow-hidden z-[100]  cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] r flex flex-col items-center justify-center gap-3 transition-all duration-300"
>
    


  <div class="capitalize  ">
    <p class="text-2xl text-[#7F3D27] text-shadow-sm text-shadow-white pb-5">Cita Aleatoria :</p>
    <form action="" class="flex flex-col gap-3">

        <div class="flex flex-col items-start w-full">
        <label for="titulo" class="text-sm text-[#7F3D27] font-semibold "
          >Título</label
        >

        {cita?.cita?.length > 0 && (
        <input
          id="titulo"
          type="text"
          value={cita.cita[0].titulo}
          disabled
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0
           border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] 
           focus:outline-none text-[#7F3D27] placeholder:text-xs
           text-shadow-sm"
        />        )}

      </div> 

      <div class="flex flex-col items-start w-full">
        <label for="autor" class="text-sm text-[#7F3D27] font-semibold "
          >Autor</label
        >

        {cita?.cita?.length > 0 && (
        <input
          id="autor"
          type="text"
          value={cita.cita[0].autor}
          disabled
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2
           border-[#7F3D27] placeholder:text-[#A15A3E] 
           focus:outline-none text-[#7F3D27] placeholder:text-xs "
        />        )}

      </div>

  
      <div class="flex flex-col items-start w-full">
        <label for="cita" class="text-sm text-[#7F3D27] font-semibold"
          >Cita</label>

        {cita?.cita?.length > 0 && (

          <textarea
          cols={"500"}
          type="text"
          value={cita.cita[0].cita}
          disabled
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2
           border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
          />
          )}
    
      </div>

      <div class="flex flex-col items-start w-full">
        <label for="descripción" class="text-sm text-[#7F3D27] font-semibold"
          >Descripción</label
        >

        {cita?.cita?.length > 0 && (

          <textarea
          cols={"500"}
          type="text"
          value={cita.cita[0].descripcion}
          disabled
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
          />
          )}

      </div>


    </form>
  </div>
</div>


</div>

  </>
  )
}
