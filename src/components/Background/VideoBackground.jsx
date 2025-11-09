import React from 'react'
import video from '../../assets/video/bg.mp4';

export default function VideoBackground() {
  return (
<>
  <video autoPlay loop muted >
          <source src = {video} type = 'video/mp4' />
    </video>
</>
  )
}
