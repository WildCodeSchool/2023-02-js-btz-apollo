import { useState, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { SpinnerDotted } from 'spinners-react';
import axios from 'axios'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Sun from '../components/Objects/Sun'
import Planet from '../components/Objects/Planet'
import './Scene.css'

const Scene = () => {
    const [objects, setObjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [moons, setMoons] = useState({})

    useEffect(() => {
      setTimeout(()=>{
        axios
          .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
          .then((res) => {

            const moonsMap = {}
              
              res.data.bodies.forEach(element => {

                if(element.bodyType !== 'Moon' ) {
                    return
                }

               if(!moonsMap[element.aroundPlanet.planet]){
                moonsMap[element.aroundPlanet.planet]=[]
               }

               moonsMap[element.aroundPlanet.planet].push(element)
              });
            setObjects(res.data.bodies);
            setMoons(moonsMap);
            setIsLoading(false);
          });
        },1000);
      }, []);

    return (
        <div className='scene'>
          <Header />
        <div className="canvas">
          {isLoading ? (
            <div className='loading'>
            <img className='capybara' src="https://i.redd.it/capy-is-king-v0-ian6ahoqhqna1.png?s=5639c3866298be9ecffdfe3c8f34f9f8371e885e" alt="capybara" />
            <span>Loading</span> 
            <SpinnerDotted color="#424463" />
            </div>
            
          ) : (<>
            <Canvas
              camera={{
                position: [0, 75, 0],
                fov: 45,
                near: 0.1,
                far: 999999999999
              }}
            >
              <Stars
                radius={500}
                depth={50}
                count={5000}
                factor={20}
                saturation={1}
                fade
                speed={0}
              />
              <OrbitControls makeDefault />
              <pointLight intensity={0.5} />
              {objects &&
                objects
                  .map((astre) => {
                     if (astre.bodyType === 'Star') return <Sun key={astre.id} sun={astre} />
                     if (astre.bodyType === 'Planet') return <Planet key={astre.id} planet={astre} moons={moons[astre.id]} /> 
                     return null
                  })}
            </Canvas>
            </>
          )}
        </div>
        <Navbar />
      </div>
    );
  };
  export default Scene;