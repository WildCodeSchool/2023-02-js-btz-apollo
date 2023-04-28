import { useGLTF, Clone } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Moon = ({moon}) => {
    
    let { model3d, aphelion, meanRadius, sideralOrbit } = moon; //let because we modify some value for scale

    aphelion /= 150000;
    meanRadius /= 10000000;

    const earthOrbit = 365.256;
    const moonModel = useGLTF(model3d);
    const moonGroupRef = useRef();
    const moonRef = useRef();

    useFrame((state, delta)=>{
        
        moonGroupRef.current.rotation.y += (earthOrbit / sideralOrbit) / 1000

    })

    return (
        <>
                <group ref={moonGroupRef}> 
                    <mesh/>
                    <Clone
                        ref = {moonRef}
                        object={moonModel.scene }
                        scale={ meanRadius }
                        position={[aphelion,0,0]}
                    />
                </group>

            </>
  )
}

export default Moon