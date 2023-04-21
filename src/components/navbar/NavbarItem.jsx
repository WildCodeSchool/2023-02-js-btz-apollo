import { useLoader } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import TurnPlanet from './TurnPlanet';
import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

import './NavbarItem.css';

const NavbarItem = ({ object }) => {
  const { model3d } = object;

  const model = useLoader(GLTFLoader, model3d);
  const [name, setName] = useState();

  const handleMouseIn = () => {
    setName(!name);
  };

  const handleMouseOut = () => {
    setName(!name);
  };
  return (
    <div className="navbar-item">
      <div
        className="object"
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
      >
        <Link to={`/${object.id}`}>
          <Canvas camera={{ fov: 40 }}>
            <pointLight position={[-5, 0, 5]} intensity={1} />
            <TurnPlanet model={model} />
          </Canvas>
        </Link>
      </div>
      <div className={`planet${name ? '-name' : ''}`}>
        <p>{object.englishName}</p>
      </div>
    </div>
  );
};

export default NavbarItem;
