import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const TurnPlanet = ({ model }) => {
    const modelRef = useRef();
    const [hover, setHover] = useState(false);

    useFrame(() => {
        if (hover) {
            modelRef.current.rotation.y += 0.02;
        }
    });
  
  return (
    <>
        <primitive
            ref={modelRef} object={model.scene} scale={0.002}

            onPointerOver={() => {
                setHover(true);
             }}
             
            onPointerOut={() => {
                setHover(false);
            }}
        />
    </>
  );
};

export default TurnPlanet;
