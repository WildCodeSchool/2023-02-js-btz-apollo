import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const TurnPlanet = ({ model, index, handleSetObject, handleClicked }) => {
    const modelRef = useRef();
    const [hover, setHover] = useState(false);

    useFrame(() => {
        {hover ? modelRef.current.rotation.y += 0.02 : null;
        }
    });
  
  return (
    <>
            <primitive
                ref={modelRef} object={model.scene} scale={0.0015}
                onDoubleClick={()=>{
                    handleSetObject(index)
                    handleClicked()
                }}
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
