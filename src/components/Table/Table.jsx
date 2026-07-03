import React from 'react'
import './scroll.css'

export default function Table({citas, seleccionarCita}) {

  const totalCitas = citas.reduce(
    (total, categoria) => total + categoria.citas.length,
    0
  );

  return (
    <article className='max-h-[600px] overflow-y-auto overflow-x-auto scroll-table'>
      <h3 className="py-2 text-[#4B3621] font-semibold">Total citas: {totalCitas}</h3>

      {/* Vista de tabla - visible solo en pantallas medianas y grandes */}
      <table className="hidden md:table w-full table-auto mt-2 mb-2 mr-2 ml-2 px-1 rounded-lg border-4 border-[#6B4F2A] bg-[#F5E6C8] shadow-2xl">
        <thead>
          <tr className="bg-black text-[#F8F1E4]">
            <th className="px-3 py-3 text-center text-lg font-bold tracking-wide">
              Título
            </th>
            <th className="px-3 py-3 text-center text-lg font-bold tracking-wide">
              Autor
            </th>
            <th className="px-3 py-3 text-center text-lg font-bold tracking-wide">
              Categoría
            </th>
          </tr>
        </thead>

        <tbody>
          {citas.flatMap(categoria =>
            categoria.citas.map((cita, index) => (
              <tr
                key={`${categoria.categoria}-${cita.titulo}-${cita.autor}`}
                onClick={() => seleccionarCita(cita)}
                className={`
                  cursor-pointer
                  border-b border-[#C8A97E]
                  ${index % 2 === 0 ? 'bg-[#F8F1E4]' : 'bg-[#EFE0C1]'}
                  hover:bg-[#E4C89A]
                  transition-colors duration-300
                `}
              >
                <td className="max-w-[75px] px-2 py-4 text-[#4B3621] font-semibold md:px-4 md:text-sm">
                  {cita.titulo}
                </td>
                <td className="max-w-[50px] px-2 py-4 text-[#5C4630] italic md:px-4 md:text-sm">
                  {cita.autor}
                </td>
                <td className="max-w-[50px] px-2 py-4 text-[#6B4F2A] font-medium md:px-4 md:text-sm">
                  {categoria.categoria}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Vista de tarjetas - visible solo en pantallas pequeñas */}
      <div className="md:hidden grid grid-cols-1 gap-3 mt-2 mb-2 mr-2 ml-2">
        {citas.flatMap(categoria =>
          categoria.citas.map((cita, index) => (
            <div
              key={`${categoria.categoria}-${cita.titulo}-${cita.autor}`}
              onClick={() => seleccionarCita(cita)}
              className={`
                cursor-pointer
                p-4
                rounded-lg
                border-2 border-[#6B4F2A]
                ${index % 2 === 0 ? 'bg-[#F8F1E4]' : 'bg-[#EFE0C1]'}
                hover:bg-[#E4C89A]
                transition-colors duration-300
                shadow-lg
              `}
            >
              <div className="mb-3">
                <span className="text-xs font-bold text-[#6B4F2A] uppercase tracking-wide">Título</span>
                <p className="text-[#4B3621] font-semibold text-sm mt-1">
                  {cita.titulo}
                </p>
              </div>
              
              <div className="mb-3">
                <span className="text-xs font-bold text-[#6B4F2A] uppercase tracking-wide">Autor</span>
                <p className="text-[#5C4630] italic text-sm mt-1">
                  {cita.autor}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#6B4F2A] uppercase tracking-wide">Categoría</span>
                <p className="text-[#6B4F2A] font-medium text-sm mt-1">
                  {categoria.categoria}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  )
}
