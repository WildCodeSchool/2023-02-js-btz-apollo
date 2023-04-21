import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './NavbarItems.css';

const NavbarItems = ({ object }) => {
  const { model3d } = object;

  const model = useLoader(GLTFLoader, model3d);

  return (
    <div className="object">
      <p>{object.englishName}</p>
      <Canvas camera={{ fov: 50 }}>
        <OrbitControls />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <primitive object={model.scene} scale={0.0025} />
      </Canvas>
    </div>
  );
};

export default NavbarItems;
