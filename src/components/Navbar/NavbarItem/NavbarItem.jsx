import { useState } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TurnPlanet from '../TurnPlanet';
import './NavbarItem.css';

const NavbarItem = ({ navPlanet }) => {

    const { model3d } = navPlanet;
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
                <Canvas camera={{ fov: 40 }}>
                    <pointLight position={[-5, 0, 5]} intensity={1} />
                    <TurnPlanet model={model} />
                </Canvas>
            </div>
            <div className={`planet${name ? '-name' : ''}`}>
                <p>{navPlanet.englishName}</p>
            </div>
        </div>
    );
};

export default NavbarItem;
