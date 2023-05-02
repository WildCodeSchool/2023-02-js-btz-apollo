import { useRef, useState, createContext } from 'react';
import { useFrame } from '@react-three/fiber';

const TurnPlanet = ({ model } ) => {


    const PlanetContext = createContext()
    const modelRef = useRef();
    const [hover, setHover] = useState(false);

    useFrame(() => {
        {hover ? modelRef.current.rotation.y += 0.02 : null;
        }
    });
  
  return (
            <primitive
                ref={modelRef} object={model.scene} scale={0.0015}
                onPointerOver={() => {
                    setHover(!hover);
                 }}
    
                onPointerOut={() => {
                    setHover(!hover);
                }}
            />
  );
};

export default TurnPlanet;
