import React from 'react'
import { useState, useEffect } from 'react'
import Table from '../components/Table/Table'
export default function CargaCIta({cambiarAprincipal, citas}) {
  console.log("El objeto citas es "+citas)
  return (
<div class="flex justify-center">
<div
  class="form w-[1000px] opacity-90 rounded-md shadow-xl overflow-hidden z-[100]  cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] r flex flex-col items-center justify-center gap-3 transition-all duration-300"
>
    


  <div class="capitalize  ">
    <p class="text-2xl text-[#7F3D27] text-shadow-sm text-shadow-white pb-5">Listado de citas existentes</p>
    <div  class="flex flex-col gap-3">




    <Table citas={citas} />






    </div>
  </div>
</div>


</div>  )
}
