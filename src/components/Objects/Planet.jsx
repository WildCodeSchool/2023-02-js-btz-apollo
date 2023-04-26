import { Clone, Torus, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Planet = ({planet}) => {

    const earthOrbit = 365.256;
    
    const planetRef = useRef()
    const groupRef = useRef()
    
    const planetModel = useGLTF(planet.model3d);
    let { meanRadius, aphelion, sideralRotation, axialTilt, sideralOrbit } = planet

    {planet.name == 'Pluton' ? meanRadius = 100000 : meanRadius}
    
    meanRadius /= 10000000;
    aphelion /= 10000000;

    sideralRotation /= 1000000; //in hours in API => to convert
    // sideralOrbit /= 10000000; //in days in API => to convert
    
    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180


useFrame((state, delta)=>{
        
        planetRef.current.rotation.y += sideralRotation;
        groupRef.current.rotation.y += (earthOrbit / sideralOrbit) / 1000;

    })


  return (

        <>

            <group ref={groupRef}>
                <mesh>
                    <sphereGeometry />
                </mesh>
                <Clone
                   ref={planetRef}
                   object={ planetModel.scene }
                   scale={ meanRadius }
                   position={ [aphelion,0 ,0] }
                   rotation={[0, 0 ,-radianAxialTilt]}
                />
            </group>

            <Torus
                args={[aphelion,0.005,30,200]}
                rotation={[- Math.PI / 2, 0, 0]}
                material-color="hotpink"
            />

        </>
  )
}

export default Planet