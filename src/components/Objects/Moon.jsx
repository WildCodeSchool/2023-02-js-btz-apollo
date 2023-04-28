import { useGLTF} from '@react-three/drei'
import { useRef } from 'react';

const Moon = ({moon}) => {

    
    let { model3d, aphelion, meanRadius } = moon; //let because we modify some value for scale
    
    const moonModel = useGLTF(model3d);
    const turnArroundPlanet = useRef();
    const moonRef = useRef();

    aphelion /= 150000;
    meanRadius /= 7000000;

    return (

    <>
        <mesh ref={turnArroundPlanet}>
            <primitive
                ref = { moonRef }
                object={ moonModel.scene }
                scale={ meanRadius }
                position={ [0,0,0] }
            />
        </mesh>
    </>

  )
}

export default Moon