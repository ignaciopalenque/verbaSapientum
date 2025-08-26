import React from 'react'
export default function Login({ cambiarAregistro, cambiarAprincipal }) {

 const comprobarLogin = () => {
    cambiarAprincipal()
  }

  return (
<>

<div class="flex justify-center">
<div
  class="form w-[300px] opacity-90 rounded-md shadow-xl overflow-hidden z-[100]  cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] r flex flex-col items-center justify-center gap-3 transition-all duration-300"
>
    


  <div class="capitalize  ">
    <p class="text-2xl text-[#7F3D27] text-shadow-sm text-shadow-white pb-5">Iniciar Sesión</p>
    <form action="" class="flex flex-col gap-3">


      <div class="flex flex-col items-start w-full">
        <label for="email" class="text-sm text-[#7F3D27] font-semibold "
          >Email</label
        >
        <input
          type="email"
          placeholder="Ingrese su email aquí"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>

      <div class="flex flex-col items-start w-full">
        <label for="password" class="text-sm text-[#7F3D27] font-semibold"
          >Contraseña</label
        >
        <input
          type="password"
          placeholder="Ingrese su contraseña aqui"
          class="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
        />
      </div>

      <div class="inline-flex gap-2 items-center text-[#A15A3E]">
        <input
          type="checkbox"
          name=""
          id=""
          class="w-3 h-3 focus:border-0 focus:outline-none focus:accent-[#7F3D27] checked:accent-[#A15A3E] checked:text-[#A15A3E] px-1 py-1"
          checked=""
        />
        <p class="text-xs">
          By Signing Agree with
          <span class="font-semibold">Term ; Policy</span>
        </p>
      </div>

      <div class="inline-flex gap-5">
        <button
          class="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#D9D9D9] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
          onClick={comprobarLogin}
        >
          Login
        </button>
        <button
          class="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#7F3D27] bg-[#D9D9D9] shadow-[#7F3D27] shadow-lg"
          onClick={cambiarAregistro}
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</div>


</div>


 
    </>
  )
}
