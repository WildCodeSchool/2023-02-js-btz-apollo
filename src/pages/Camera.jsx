import React from 'react'
import { useFrame } from '@react-three/fiber';

const Camera = () => {

      useFrame((state, delta)=>{

        const angle = -state.clock.elapsedTime / 50 ;
        state.camera.position.x = Math.sin(angle) * 75
        state.camera.position.z = Math.cos(angle) * 75
        state.camera.lookAt(0, 0, 0)

      })

  return (
    <></>
  )
}

export default Camera