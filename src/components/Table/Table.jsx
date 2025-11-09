import React from 'react'
import { useEffect } from 'react';
export default function Table({citas}) {

      useEffect( () => {

            citas.forEach(cita => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td class='px-4 py-2 border border-gray-300'>${cita.titulo}</td>
            <td class='px-4 py-2 border border-gray-300'>${cita.cita}</td>
            <td class='px-4 py-2 border border-gray-300'>${cita.autor}</td>
            <td class='px-4 py-2 border border-gray-300'>${cita.categoria}</td>
            <td class='px-4 py-2 border border-gray-300'>${cita.usuario}</td>
            `;
            row.classList.add('border', 'border-gray-300');
            document.getElementsByTagName('tbody')[0].appendChild(row);
        })

      },[])


  return (
    <article className='max-h-[600px] overflow-y-auto border border-gray-300 rounded-lg'>

    <h3>Total citas: {citas.length}</h3>

    <table id="tabla-citas" className='table-auto w-full text-left border border-gray-300 '>
        <thead>
            <tr>
            <th className='px-4 py-2 border'>Título</th>
            <th className='px-4 py-2 border'>Cita</th>
            <th className='px-4 py-2 border'>Autor</th>
            <th className='px-4 py-2 border'>Categoría</th>
            <th className='px-4 py-2 border'>Usuario</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>


    </article>
  )
}
