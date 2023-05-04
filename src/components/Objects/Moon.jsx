import { useGLTF, Clone} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Moon = ({moon}) => {

    
    let { model3d, aphelion, meanRadius,sideralOrbit } = moon; //let because we modify some value for scale
    
    const moonModel = useGLTF(model3d);
    const turnArroundPlanet = useRef();
    const moonRef = useRef();
    const earthOrbit = 365.256;

    aphelion /= 150000;
    meanRadius /= 7000000;

    useFrame(()=>{
        turnArroundPlanet.current.rotation.y += (earthOrbit / sideralOrbit); //rotation de la planete autour du soleil
    })

    return (

    <>
        <mesh ref={turnArroundPlanet}>
            <Clone
                ref = { moonRef }
                object={ moonModel.scene }
                scale={ meanRadius }
                position={ [0,0,0] }
                receiveShadow
            />
        </mesh>
    </>

  )
}

export default Moon