import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './NavbarItem.css';

const NavbarItem = ({ object }) => {
  const { model3d } = object;

  const model = useLoader(GLTFLoader, model3d);

  return (
    <div className="navbar-item">
      <div className="object">
      <Link to='/cards'><Canvas camera={{ fov: 40 }}>
          <pointLight position={[-5, 0, 5]} intensity={1} />
          <primitive object={model.scene} scale={0.002} />
        </Canvas></Link>
      </div>
      <div className="planet-name">
        <p>{object.englishName}</p>
      </div>
    </div>
  );
};

export default NavbarItem;
