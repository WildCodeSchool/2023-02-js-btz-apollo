import { Clone, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Moon = ({moon}) => {

    let {sideralRotation, axialTilt, sideralOrbit, model3d } = moon;
    const moonModel = useGLTF(model3d); 

    moon.meanRadius /= 10000000;
    moon.aphelion /= 10000000;

    // planet.aphelion /= 10000000

    // sideralRotation /= 1000000; //in hours in API => to convert
     
    return (
        <>
                <group >
                    <mesh>
                        <sphereGeometry />
                    </mesh>

                    <primitive
                        object={moonModel.scene}
                        scale={ moon.meanRadius}
                        position={ [0,0 ,0] }
                        rotation={[0, 0 ,0]}
                    // onClick={orbitColor}
                    />
                </group>

            </>
  )
}

export default Moon