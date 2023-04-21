import { useLoader } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TurnPlanet from './TurnPlanet';

import './NavbarItem.css';

const NavbarItem = ({ object }) => {
  const { model3d } = object;

  const model = useLoader(GLTFLoader, model3d);

  return (
    <div className="object">
      <p>{object.englishName}</p>
      <Canvas camera={{ fov: 50 }}>
        <pointLight position={[-5, 0, 5]} intensity={1} />
        <TurnPlanet model={model} />
      </Canvas>
    </div>
  );
};

export default NavbarItem;
