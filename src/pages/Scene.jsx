import { useState, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import axios from 'axios'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Sun from '../components/Objects/Sun'
import Planet from '../components/Objects/Planet'
import './Scene.css'

const Scene = () => {


    const [objects, setObjects] = useState([]);

    useEffect(() => {
    axios
        .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
        .then((res) => setObjects(res.data.bodies));
    }, []);


  return (
    <div className='scene'>
        <Header />
            <div className="canvas">
                <Canvas
                    camera={{
                        position: [0,20,40],
                        fov: 45,
                        near: 0.1,
                        far: 999999999999
                    }}
                >
                    <Stars radius={500} depth={50} count={30000} factor={20} saturation={1} fade speed={0} />
                    <OrbitControls makeDefault />
                    <pointLight />
                    {objects &&
                        objects
                        .filter((object) => object.bodyType === 'Star')
                        .map((star) => <Sun key = {star.id} sun = {star} />)}

                    {objects &&
                        objects
                        .filter((object) => object.bodyType === 'Planet')
                        .map((planet) => <Planet key = {planet.id} planet = {planet} />)}
                </Canvas>
            </div>
        <Navbar />
    </div>
  )
}

export default Scene