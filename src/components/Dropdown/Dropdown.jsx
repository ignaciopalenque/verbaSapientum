import { useState, useRef, useEffect } from "react";

export default function Dropdown({ categorias = [], value, onChange, placeholder = "Selecciona" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const selected = categorias.find(c => c.nombre === value);

  return (
    
    <div className="relative inline-block text-left px-2" ref={ref}>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>  
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>  
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"></link> 

      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="inline-flex justify-between items-center w-64 px-6 py-2 focus:outline-none focus:scale-110 font-semibold text-xs rounded-[5px] hover:scale-110 transition-all hover:transiton  hover:shadow-[#EFE0C1] shadow-gray-400 shadow-md"
        aria-haspopup="true"
        aria-expanded={open}
        style={{fontFamily: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}

      >
        <div className="text-left">
          <div className="font-medium">{selected ? selected.nombre : placeholder}</div>
        </div>
        <svg className={`w-4 h-4 ml-2 transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-64 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {categorias.length === 0 && (
            <li className="px-4 py-2 text-sm text-gray-500">Sin categorias</li>
          )}
          {categorias.map(cat => (
            <li key={cat.nombre}>
              <button
                type="button"
                onClick={() => { onChange(cat.nombre); setOpen(false); }}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex flex-col"
              >
                <span className="font-medium">{cat.nombre}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
