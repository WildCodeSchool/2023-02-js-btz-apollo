import { useGLTF, Clone } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

const Moon = ({moon, planet}) => {

    console.log(planet.sideralOrbit);

    const earthOrbit = 365.256;

    const {model3d } = moon;
    const moonModel = useGLTF(model3d);
    const moonGroupRef = useRef();

    moon.aphelion /= 10000;
    moon.meanRadius /= 1000000;

    useFrame((state, delta)=>{
        
        moonGroupRef.current.rotation.y += (earthOrbit / 15) / 1000; //rotation de la lune autour de sa planete

    })

    return (
        <>
                <group ref={moonGroupRef}>
                    <mesh>
                        <sphereGeometry />
                    </mesh>

                    <Clone
                        object={moonModel.scene }
                        scale={ moon.meanRadius * 10}
                        position={[moon.aphelion,0,0]}
                    // onClick={orbitColor}
                    />
                </group>

            </>
  )
}

export default Moon