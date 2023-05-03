import React from 'react'
import { useFrame, useThree } from '@react-three/fiber';

const Camera = () => {
      const {gl, camera} = useThree();
      const originPos = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      }

      useFrame((state, delta)=>{
        // const camera = useThree(state => state.camera)
        console.log(originPos);
        // const angle = -state.clock.elapsedTime / 50 ;
        // state.camera.position.x = Math.sin(angle) * 75
        // state.camera.position.z = Math.cos(angle) * 75
        // state.camera.lookAt(0, 0, 0)

      })

  return (
    <></>
  )
}

export default Camera