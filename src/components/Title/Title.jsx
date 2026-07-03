import React from 'react'
import '@fontsource/macondo';

export default function Title() {
  return (
    <>
        <div className="flex flex-col items-center justify-center ">
<h1
  className="text-[#3E2A1F]   text-center font-semibold tracking-wide mb-2"
  style={{
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
    textShadow: `
      0 0 6px rgba(255,255,255,0.9),
      0 0 12px rgba(255,255,255,0.6),
      1px 1px 2px rgba(0,0,0,0.4)
    `,
  }}
>
Verba Sapientum </h1>
 
<h2
  className=" inline-block
  px-4 py-0.5
  text-lg md:text-xl
  text-gray-100
  xl:bg-black/25
  lg:bg-black/25
  backdrop-blur-md
  xl:rounded-full
  lg:rounded-full
  border border-white/10
  shadow-md
  
  "
  style={{
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    textShadow: `
      0 0 5px rgba(255,255,255,0.8),
      0 0 10px rgba(255,255,255,0.5),
      1px 1px 2px rgba(0,0,0,0.3)
    `,
  }}
>
  Repositorio de citas para la reflexión y el aprendizaje 📚
</h2>
    </div>
    </>
  )
}
