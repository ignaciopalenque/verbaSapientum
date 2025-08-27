import React from 'react'

export default function BtnMenu({ texto, onClick, claseExtra = '' }) {
  return (
    <>
         <button
          onClick={onClick}
          className={`px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all hover:transiton text-[#7F3D27] bg-[#D9D9D9] shadow-[#7F3D27] shadow-lg ${claseExtra}`}
        >
        {texto}
        </button>
    </>
)
}
