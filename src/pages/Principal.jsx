import React from 'react'
import { useState, useEffect} from 'react';
import BtnMenu from '../components/Buttons/BtnMenu';  
import Cita from '../pages/Cita';
import CitaAleatoria from '../pages/CitaAleatoria';
import ListadoCitas from './CargaCita'
import SelectorCategorias from '../components/Dropdown/Dropdown';
import Info from '../pages/Info';
export default function Principal() {


  //estados del formulario
  const [formularioActual, setformularioActual] = useState('principal');
  const [citas, setCitas] = useState([]);
  const [citaAleatoria, setCitaAleatoria] = useState({});
  const [listadoCitas, setListadoCitas] = useState({});
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [selected, setSelected] = useState(null);
  const categoriasJson = ['Biblicas.json', 'Filosoficas.json', 'Proverbios.json']

  const cargarCita = () => setformularioActual('cargarCita');
  const volverAprincipal = () => setformularioActual('principal');
  const volverInicio = () => setformularioActual('inicio');

  const token = localStorage.getItem("token");
  const [categorias, setCategorias] = useState([]);
  
  const seleccionarCita = (cita) => {
    setCitaSeleccionada(cita);
    console.log(cita);
    setformularioActual('cargarCita');
  };

  const cambiarCategoria = (value) => {
  console.log(value);
  setSelected(value);
  
};

 const cargarCitaAleatoria = () => {
   try{

    obtenerCitaAleatoria();
    setformularioActual('citaAleatoria');

   }catch (error) {
    console.error("Error al obtener todas las citas:", error); 
   }
 }
 const obtenerCitaAleatoria = async () => {
       try {

        const jsonFiles = [
        './text/Citas/Filosoficas.json',
        './text/Citas/Biblicas.json',
        './text/Citas/Proverbios.json',
        ];

         const randomFile =
            jsonFiles[Math.floor(Math.random() * jsonFiles.length)];


        const response = await fetch(randomFile, {
            
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            

        });

      

        if (!response.ok) {
        console.log(response)
        throw new Error("Error en el registro de usuario");
        }

        const data = await response.json();
        console.log(data);
        setCitaAleatoria(data);
        console.log(data);
        

    } catch (error) {
        console.error("Error:", error);
    }
       }


  const obtenerCategorias = async () => {
       try {
        const response = await fetch("./text/Categorias.json", {
            
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            

        });

      

        if (!response.ok) {
        console.log(response)
        throw new Error("Error en el registro de usuario");
        }
      

        const data = await response.json();
        if (data.categorias === null || data.categorias === undefined) {
            setCategorias([]);
          } else {
            setCategorias(data.categorias);
          }
        

    } catch (error) {
        console.error("Error:", error);
    }
    }

     const cargarCitasJson = async (categorias) => {
      try {

        if (categorias[0].includes(("Todas"))) {
         cargarCitasJson(categoriasJson);
        }
          console.log(categorias);
          const files = categorias;
          const results = await Promise.all(
        files.map(file =>
        fetch(`./text/Citas/${file}`).then(r => r.json())
        )
      );
      console.log(results);
      setListadoCitas(results);
      console.log("Se cambia el formulario a cargarCitas");
      setformularioActual('cargarCitas');
      setCitaSeleccionada(null);  
      }catch (error) {
       console.error("Error al obtener todas las citas:", error); 
      }
      
    }
    



  useEffect( () => {


    obtenerCategorias();





    
    if (!citaSeleccionada){

      console.log(selected);
      console.log(citaSeleccionada);
      console.log("Entro en carga de categorias");
      cargarCitasJson(Array.isArray(selected) ? selected+'.json' : [selected+'.json']);

    }


  }

  
  
,[citaSeleccionada, selected ] )



  return (
    <>

{formularioActual === 'inicio' && (
  
  <div class="flex flex-col items-center justify-center mt-1 w-full  max-w-7xl ">


      <div class="flex flex-row flex-wrap  items-center justify-center mt-3 w-full max-w-7xl">

      <BtnMenu texto="Abre tu mente al conocimiento" onClick={volverAprincipal}  />
      
      </div>
  
  </div>
  
  )}


{formularioActual === 'principal' && (

<div class="flex flex-col items-center justify-center  w-full  max-w-7xl">

  <div class="flex flex-row flex-wrap items-center justify-center mt-3 w-full  max-w-7xl ">

      <BtnMenu  texto="Cerrar la aplicación" onClick={volverInicio} />
      <BtnMenu  texto="Mostrar todas las citas"  onClick={() => cargarCitasJson(categoriasJson)} />
      <BtnMenu  texto="Mostrar cita aleatoria" onClick={cargarCitaAleatoria} />

     

  </div>
      <Info />
      {/* Cita aleatoria        <CitaAleatoria cita={citaAleatoria} /> */}

</div>

)}

{formularioActual === 'cargarCitas' && (

  <div class="flex flex-col items-center justify-center mt-1 max-w-7xl">

    <div class="flex flex-row flex-wrap items-center justify-center mt-3 w-full h-full max-w-7xl">

    <BtnMenu  texto="Volver al menu principal" onClick={volverAprincipal} />
    <SelectorCategorias
        categorias={categorias}
        value={selected}
        onChange={cambiarCategoria}
        placeholder="Mostrar solo categoria"
      />

    </div>

    <ListadoCitas  citas={listadoCitas}  seleccionarCita={seleccionarCita}/>


  </div>
  

)}


{formularioActual === 'cargarCita' && (

<div class="flex flex-col items-center justify-center mt-1 w-full max-w-7xl">

  <div class="flex flex-row flex-wrap  items-center justify-center mt-3 w-full h-full max-w-7xl ">

      <BtnMenu  texto="Volver a la lista"  onClick={() => cargarCitasJson(categoriasJson)} />

  </div>

      <Cita cita={citaSeleccionada} />
</div>

)}


{formularioActual === 'citaAleatoria' && (

<div class="flex flex-col items-center justify-center mt-1 w-full  max-w-7xl ">

  <div class="flex flex-row flex-wrap  items-center justify-center mt-3 w-full  max-w-7xl ">

    <BtnMenu  texto="Volver al menu principal" onClick={volverAprincipal} />

  </div>

      <CitaAleatoria cita={citaAleatoria} />
</div>

)}


    </>
)
}
