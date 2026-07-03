import React from 'react'
import { useState, useEffect } from 'react'
import BtnMenu from '../components/Buttons/BtnMenu';  
import Table from '../components/Table/Table'
export default function CargaCIta({ citas, seleccionarCita }) {  return (

  <>


    <div className="flex justify-center items-center opacity-80 mt-5">

              <div className="relative w-full min-w-6xl md:max-w-3xl ms:max-w-2xl ">


                <div className="absolute  left-0 right-0 h-4 bg-gradient-to-b from-[#8B6F47] via-[#A0826D] to-transparent rounded-full blur-md opacity-60"></div>

                    <div className="bg-gradient-to-b  from-[#F5E6D3] via-[#EAD7C3] to-[#E5D1BF] 
                          rounded-lg shadow-2xl overflow-hidden
                          border-2 border-[#8B6F47]
                          px-20 py-2
                          animate-fadeInDeploy
                          backdrop-blur-sm
                          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23000%22 opacity=%220.02%22 width=%22100%22 height=%22100%22/></svg>')] before:pointer-events-none">
            
<div
>
    

               
            {/* Decoración superior */}
            <div className="flex justify-center mb-1">
              <div className="text-4xl text-[#8B6F47] opacity-40">✦ ✦ ✦</div>
            </div>
  <div className="capitalize  ">
    <p className="w-full text-3xl font-serif text-[#5A4A3A] 
                              bg-transparent border-none outline-none text-center
                              placeholder:text-[#A89968] font-bold
                              italic"
          style={{fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)'}}>Listado de citas existentes  </p>

    <div  className="flex flex-col gap-3 h-[500px] overflow-y-auto">




    <Table citas={citas} seleccionarCita={seleccionarCita}/>






    </div>

       
  </div>
</div>


</div> 


                <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-[#8B6F47] via-[#A0826D] to-transparent rounded-full blur-md opacity-60"></div>



              
              
              </div>


    </div>

   <style jsx>{`
        @keyframes fadeInDeploy {
          from {
            opacity: 0;
            transform: scaleY(0) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: scaleY(1) rotateX(0deg);
          }
        }

        @keyframes scrollParch {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }

        .animate-fadeInDeploy {
          animation: fadeInDeploy 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

    
  </>


 )

 
}
