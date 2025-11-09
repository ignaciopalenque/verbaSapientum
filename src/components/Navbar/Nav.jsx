import React from 'react'
import sound1 from '../../assets/audio/sound1.webm'
import sound2 from '../../assets/audio/sound2.webm'
import sound3 from '../../assets/audio/sound3.webm'
import sound4 from '../../assets/audio/sound4.webm'
import sound5 from '../../assets/audio/sound5.webm'
import sound6 from '../../assets/audio/sound6.webm'
import sound7 from '../../assets/audio/sound7.webm'
import sound8 from '../../assets/audio/sound8.webm'
import sound9 from '../../assets/audio/sound9.webm'
import sound10 from '../../assets/audio/sound10.webm'
import sound11 from '../../assets/audio/sound11.webm'
import sound12 from '../../assets/audio/sound12.webm'
import next from '../../assets/image/next.png'
import prev from '../../assets/image/prev.png'
import pause from '../../assets/image/pause.png'
import play from '../../assets/image/play.png'
import stop from '../../assets/image/stop.png'
import { useEffect } from 'react';
import styled from 'styled-components'
const SectionStyled = styled.section`
  p {
    animation: mover 35s linear infinite;
    white-space: nowrap;
    position: absolute;
    will-change: transform;
  }

  @keyframes mover {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
export default function Nav() {

let sonido=1
function pauseAudio() {
  if(musica.paused){
    musica.play();
  }else{
    musica.pause();
  }
};
function nextAudio() {

  if(sonido>12) sonido=1
  sonido+=1
  actualizarSonando()
};
function prevAudio() {
  if(sonido<1) sonido=1
  sonido-=1
 actualizarSonando()
};

function playAudio() {

  console.log(sonido)
 actualizarSonando()
;
};

function stopAudio() {
  musica.pause();
  sonando.innerHTML = "La reproducción ha sido detenida"
  sonido=1
};

 function actualizarSonando(){


        switch (sonido){
            case 1:
                sonando.innerHTML = "Esta escuchando la pieza 1 de 12 :  Umutsuz Aşk del autor Turco Bagjan Oktyabr "
                musica.src = sound1
                musica.play();
            break;
            case 2:
                sonando.innerHTML = "Esta escuchando la pieza 2 de 12 :  Sherlock - Irene Adler's Theme - Cover Piano  "
                musica.src = sound2
                musica.play();
            break;
            case 3:
                sonando.innerHTML = "Esta escuchando la pieza 3 de 12 :  The Departure del autor Max Richter "
                musica.src = sound3
                musica.play();

            break;
            case 4:
                sonando.innerHTML = "Esta escuchando la pieza 4 de 12 :  Concierto de Aranjuez Piano "
                musica.src = sound4
                musica.play();

            break;
            case 5:
                sonando.innerHTML = "Esta escuchando la pieza 5 de 12 :  Great Warrior is dead "
                musica.src = sound5
                musica.play();
            break;
            case 6:
                sonando.innerHTML = "Esta escuchando la pieza 6 de 12 :  Remember Sadness del autor Seiji Yokoyama "
                musica.src = sound6
                musica.play();
            break;

            case 7:
                sonando.innerHTML = "Esta escuchando la pieza 7 de 12 :  Tales from the Loop del autor Philip Glass "
                musica.src = sound7
                musica.play();
            break;


            case 8:
                sonando.innerHTML = "Esta escuchando la pieza 8 de 12 :  Da Vinci's Demons del autor Bear McCreary "
                musica.src = sound8
                musica.play();
            break;


            case 9:
                sonando.innerHTML = "Esta escuchando la pieza 9 de 12 :  Für Elise  del autor Ludwig van Beethoven  "
                musica.src = sound9
                musica.play();
            break;


            case 10:
                sonando.innerHTML = "Esta escuchando la pieza 10 de 12 :  Mitsumeru Saki Ni Wa "
                musica.src = sound10
                musica.play();
            break;


            case 11:
                sonando.innerHTML = "Esta escuchando la pieza 11 de 12 :  True Light "
                musica.src = sound11
                musica.play();
            break;


            case 12:
                sonando.innerHTML = "Esta escuchando la pieza 12 de 12 :  Through Pain "
                musica.src = sound12
                musica.play();
            break;

            default:
                sonando.innerHTML = "Esta escuchando la pieza 1 de 12 :  Umutsuz Aşk del autor Turco Bagjan Oktyabr "
                musica.src = sound1
                musica.play();
            break;
        }

    }


    useEffect(() => {
    
      const musica = document.getElementById('musica');
      const playAudio = () => {
        musica.play().catch(err => {
          console.warn("Autoplay bloqueado. Se necesita interacción del usuario.");
        });
       };

       musica.addEventListener('ended', nextAudio);


      window.addEventListener('click', playAudio, { once: true });

      return () => {
        window.removeEventListener('click', playAudio);
      };
    
  }, [nextAudio]);



    


  return (
   <SectionStyled>

    <div className='absolute top-0 left-0 w-full h-8 flex items-start border-b-1 border-[#777777] '>
    

    

        <p id="sonando" className='text-[#ffffff] text-shadow-sm text-shadow-black text-center font-semibold text-sm p-2 animate-pulse'>Esta escuchando la pieza 1 de 12 :  Umutsuz Aşk del autor Turco Bagjan Oktyabr</p>
        <audio id="musica" src={sound1}  loop></audio>
    </div>

    <div className='absolute top-0 right-2 w-min  h-8 flex items-end border-b-1 border-[#777777] p-1'>

    <button id="play" className='p-1 mr-0.5 bg-transparent hover:shadow-sm hover:shadow-amber-800' style={{
      width: '25px',
      height: '25px',
      padding: 0,
      border: 'none'
    }} onClick={playAudio}>
      <img
        src={play}
        alt="botón"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

    </button>
    
    <button id="pause" className='p-1 mr-0.5 bg-transparent hover:shadow-sm hover:shadow-amber-800' style={{
      width: '25px',
      height: '25px',
      padding: 0,
      border: 'none'
    }} onClick={pauseAudio}>
      <img
        src={pause}
        alt="botón"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </button>


    <button id="prev" className='p-1 mr-0.5 bg-transparent hover:shadow-sm hover:shadow-amber-800' style={{
      width: '25px',
      height: '25px',
      padding: 0,
      border: 'none'
    }} onClick={prevAudio}>
      <img
        src={prev}
        alt="botón"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </button>

    <button id="next" className='p-1 mr-0.5 bg-transparent hover:shadow-sm hover:shadow-amber-800' style={{
      width: '25px',
      height: '25px',
      padding: 0,
      border: 'none'
    }} onClick={nextAudio}>
      <img
        src={next}
        alt="botón"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </button>


    <button id="stop" className='p-1 bg-transparent hover:shadow-sm hover:shadow-amber-800' style={{
      width: '25px',
      height: '25px',
      padding: 0,
      border: 'none'
    }} onClick={stopAudio}>
      <img
        src={stop}
        alt="botón"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </button>

    </div>

    </SectionStyled>
  )
}
