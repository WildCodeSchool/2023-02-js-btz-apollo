import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { SpinnerDotted } from 'spinners-react';
import axios from 'axios';
import Header from '../components/Header/Header'
import Card from '../components/Card/Card';
import Navbar from '../components/Navbar/Navbar';
import Sun from '../components/Objects/Sun';
import Planet from '../components/Objects/Planet';
import './Scene.css';

const Scene = () => {

    const [objects, setObjects] = useState([]);
    const [clicked,setClicked] = useState (false)
    const [isLoading, setIsLoading] = useState(true);
    const [moons, setMoons] = useState({});

    const [indexObject, setIndexObject] = useState('')

    const handleSetObject = (indexObject) => {
        setIndexObject( indexObject )
    }

    const handleClicked = ()=>{
      setClicked(!clicked)
    }

    useEffect(() => {
        axios
          .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
          .then((res) => {

            const moonsMap = {}
              
              res.data.bodies.forEach(element => {

                if (element.bodyType !== 'Moon' ) {
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
            ) : (
              <>
              {clicked ? (
      <div className="card-list">
          {objects &&
           objects
           .filter((object,index) => object.bodyType === 'Planet' && index === indexObject)
           .map((planet) => {
             return (
           <Card key={planet.id} 
                 scenePlanet={planet}
           />)
           })}
      </div>) : null }

            <Canvas
            shadows
              camera={{
                position: [-70, 70, 70],
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
              
              <pointLight 
                intensity={0.5}
                castShadow
                />

              {objects &&
                objects
                  .map((astre, indexAstre) => {
                     if (astre.bodyType === 'Star') return <Sun key={astre.id} sun={astre} />
                     if (astre.bodyType === 'Planet') return <Planet key={astre.id} 
                                                                     planet={astre} 
                                                                     moons={moons[astre.id]} 
                                                                     indexObject={indexObject} 
                                                                     indexAstre={indexAstre} 
                                                                /> 
                    return null;
                    })}
            </Canvas>
            </>
              )}
        </div>
        <Navbar handleSetObject={handleSetObject}
                handleClicked={handleClicked}/>
      </div>
    );
  };
  export default Scene;