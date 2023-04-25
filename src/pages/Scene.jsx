import { useState, useEffect } from 'react'
import axios from 'axios'
import { Canvas} from '@react-three/fiber'
import { Stars, OrbitControls, OrthographicCamera } from '@react-three/drei'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Sun from '../components/Objects/Sun'
import Planet from '../components/Objects/Planet'
import './Scene.css'
import { PointLight } from 'three'

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
                        position: [-4000,2000,4000],
                        fov: 45,
                        near: 0.1,
                        far: 999999999999999
                    }}
                >
                    <Stars radius={400} depth={50} count={1500} factor={4} saturation={0} fade speed={0} />
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