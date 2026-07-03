import React from 'react'

export default function Cita({cita}) {
  return (
    <>
      <div className="flex justify-center items-center p-8  opacity-80  ">
        {/* Contenedor con efecto de pergamino */}
        <div className="relative  ">
          
          {/* Efecto de enrollo superior */}
          <div className="absolute  left-0 right-0 h-4 bg-gradient-to-b from-[#8B6F47] via-[#A0826D] to-transparent rounded-full blur-md opacity-60"></div>
          
          {/* Pergamino principal */}
          <div className="bg-gradient-to-b from-[#F5E6D3] via-[#EAD7C3] to-[#E5D1BF] 
                          rounded-lg shadow-2xl overflow-hidden
                          border-2 border-[#8B6F47]
                          px-20 py-2
                          animate-fadeInDeploy
                          backdrop-blur-sm
                          before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23000%22 opacity=%220.02%22 width=%22100%22 height=%22100%22/></svg>')] before:pointer-events-none">
            
            {/* Decoración superior */}
            <div className="flex justify-center mb-1">
              <div className="text-4xl text-[#8B6F47] opacity-40">✦ ✦ ✦</div>
            </div>

         
              <div className="space-y-0.5 relative z-10 py-2 px-2">
                
                {/* Título */}
                <div className="flex flex-col items-center text-center">
                  <label className="text-xs uppercase tracking-widest text-[#8B6F47] font-semibold mb-2 opacity-70">
                    Cita Célebre
                  </label>
                  <input
                    type="text"
                    value={cita.titulo + ' 📜'} 
                    disabled
                    className="w-full text-3xl font-serif text-[#5A4A3A] 
                              bg-transparent border-none outline-none text-center
                              placeholder:text-[#A89968] font-bold
                              italic truncate"
                    style={{fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)'}}
                  />
                </div>

                {/* Línea decorativa */}
                <div className="flex justify-center gap-2">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent"></div>
                  <span className="text-[#8B6F47] opacity-50">❖</span>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent"></div>
                </div>

                {/* Cita principal */}
                <div className="flex flex-col items-center text-center">
                  <textarea
                    value={cita.cita}
                    disabled
                    className="w-full text-lg font-serif text-[#6B5B4B] font-semibold
                              bg-transparent border-none outline-none text-center
                              placeholder:text-[#A89968] leading-relaxed
                              resize-none min-w-[280px] min-h-[160px]"
                    rows="7"
                    cols="70"
                  />
                </div>

                {/* Línea decorativa */}
                <div className="flex justify-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent"></div>
                </div>

                {/* Autor */}
                <div className="flex flex-col items-center">
                  <label className="text-xs uppercase tracking-widest text-[#8B6F47] font-semibold mb-1 opacity-70">
                    Autor
                  </label>
                  <input
                    type="text"
                    value={cita.autor}
                    disabled
                    className="text-lg font-serif text-[#7A6A5A] 
                              bg-transparent border-none outline-none text-center
                              placeholder:text-[#A89968] italic"
                  />
                </div>

                {/* Descripción */}
                <div className="flex flex-col items-center pt-4 border-t-2 border-[#8B6F47] border-opacity-20">
                  <textarea
                    value={cita.descripcion}
                    disabled
                    className="w-full text-md font-semibold font-serif text-[#6B5B4B] 
                              bg-transparent border-none outline-none text-center
                              placeholder:text-[#A89968] leading-relaxed
                              resize-none opacity-80"
                    rows="3"
                  />
                </div>

              </div>
            

            {/* Decoración inferior */}
            <div className="flex justify-center mt-1">
              <div className="text-4xl text-[#8B6F47] opacity-40">✦ ✦ ✦</div>
            </div>

            {/* Efecto de enrollo inferior */}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-[#8B6F47] via-[#A0826D] to-transparent rounded-full blur-md opacity-60"></div>
          </div>
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
