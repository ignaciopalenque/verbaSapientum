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




 function actualizarSonando(sonido){

        switch (sonido){
            case 1:
                sonando.innerHTML = "Esta escuchando la pieza 1 de 12 :  Umutsuz Aşk del autor Turco Bagjan Oktyabr "
            break;
            case 2:
                sonando.innerHTML = "Esta escuchando la pieza 2 de 12 :  Sherlock - Irene Adler's Theme - Cover Piano  "
            break;
            case 3:
                sonando.innerHTML = "Esta escuchando la pieza 3 de 12 :  The Departure del autor Max Richter "
            break;
            case 4:
                sonando.innerHTML = "Esta escuchando la pieza 4 de 12 :  Concierto de Aranjuez Piano "
            break;
            case 5:
                sonando.innerHTML = "Esta escuchando la pieza 5 de 12 :  Great Warrior is dead "
            break;
            case 6:
                sonando.innerHTML = "Esta escuchando la pieza 6 de 12 :  Remember Sadness del autor Seiji Yokoyama "
            break;

            case 7:
                sonando.innerHTML = "Esta escuchando la pieza 7 de 12 :  Tales from the Loop del autor Philip Glass "
            break;


            case 8:
                sonando.innerHTML = "Esta escuchando la pieza 8 de 12 :  Da Vinci's Demons del autor Bear McCreary "
            break;


            case 9:
                sonando.innerHTML = "Esta escuchando la pieza 9 de 12 :  Für Elise  del autor Ludwig van Beethoven  "
            break;


            case 10:
                sonando.innerHTML = "Esta escuchando la pieza 10 de 12 :  Mitsumeru Saki Ni Wa "
            break;


            case 11:
                sonando.innerHTML = "Esta escuchando la pieza 11 de 12 :  True Light "
            break;


            case 12:
                sonando.innerHTML = "Esta escuchando la pieza 12 de 12 :  Through Pain "
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


    window.addEventListener('click', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
    };
    
  }, []);
    


  return (
   <SectionStyled>

    <div className='absolute top-0 left-0 w-full h-8 flex items-start border-b-1 border-[#777777] '>
        
        <p id="sonando" className='text-[#ffffff] text-shadow-sm text-shadow-black text-center font-semibold text-sm p-2 animate-pulse'>Esta escuchando la pieza 1 de 12 :  Umutsuz Aşk del autor Turco Bagjan Oktyabr</p>
        <audio id="musica" src={sound1}  loop></audio>
    </div>

    </SectionStyled>
  )
}
