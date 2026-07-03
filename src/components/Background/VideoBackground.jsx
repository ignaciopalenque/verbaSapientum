import React from 'react'
import video from '../../assets/video/bg.mp4';

export default function VideoBackground() {
  return (
<>
  <video autoPlay loop muted         className="absolute w-full h-full object-cover "


>
          <source src = {video} type = 'video/mp4' />
    </video>
</>
  )
}
