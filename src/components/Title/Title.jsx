import React from 'react'
import '@fontsource/macondo';

export default function Title() {
  return (
    <>
        <div className="flex flex-col items-center justify-center ">
      <h1
      className="text-[#A15A3E]
      text-shadow-md text-shadow-white
      text-center
      font-semibold 
      text-2xl"
      style={{ fontFamily: 'Macondo, monospace, sans-serif',  fontSize: 'clamp(1rem, 4vw, 4rem)'}}
        >
          "VERBO Y VOZ"
      </h1>
      <h2  className="text-[#A15A3E]
      text-shadow-md text-shadow-white
      text-center
      font-semibold 
      text-2xl mb-3"
      style={{ fontFamily: 'Macondo, monospace, sans-serif',  fontSize: 'clamp(1rem, 2vw, 4rem)'}}>
        "En la palabra habita el principio de toda sabiduría."

      </h2>

    </div>
    </>
  )
}
