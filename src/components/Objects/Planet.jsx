import { Clone, Torus, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Planet = ({planet}) => {

    
    const planetRef = useRef()
    
    const planetModel = useGLTF(planet.model3d);
    let { meanRadius, aphelion, sideralRotation, axialTilt } = planet
    
    {planet.name == 'Pluton' ? meanRadius = 100000 : meanRadius}
    
    meanRadius /= 10000000;
    aphelion /= 10000000;
    sideralRotation /= 1000000;
    
    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180


useFrame((state, delta)=>{
        
        planetRef.current.rotation.y += sideralRotation;

    })


  return (

        <>
            <Clone
               ref={planetRef}
               object={ planetModel.scene }
               scale={ meanRadius }
               position={ [aphelion,0 ,0] }
               rotation={[0, 0 ,-radianAxialTilt]}
            />

            <Torus
                args={[aphelion,0.005,30,200]}
                rotation={[- Math.PI / 2, 0, 0]}
            />

        </>
  )
}

export default Planet