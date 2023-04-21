import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const TurnPlanet = ({ model }) => {
  const modelRef = useRef();
  const [hover, setHover] = useState(false);

  {
    useFrame(() => {
      if (hover) {
        modelRef.current.rotation.y += 0.02;
      }
    });
  }
  return (
    <>
      <primitive
        ref={modelRef}
        object={model.scene}
        scale={0.002}
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
