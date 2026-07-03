import React from 'react'

export default function BtnMenu({ texto, onClick, claseExtra = '' }) {
  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>  
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"></link>    
         <button
          onClick={onClick}
          className={`px-3 m-3 focus:outline-none focus:scale-110  font-bold  py-9 rounded-[5px] hover:scale-110 transition-all hover:transiton bg-[#D9D9D9] hover:shadow-[#EFE0C1] shadow-gray-400 shadow-md text-[clamp(1.5rem,5vw,3rem)] ${claseExtra}`}
          style={{fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
        {texto}
        </button>
    </>
)
}
