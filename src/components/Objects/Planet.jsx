import { Clone, Torus, useGLTF, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Moon from './Moon';


const Planet = ({planet}) => {

    let { meanRadius, aphelion, sideralRotation, axialTilt, sideralOrbit } = planet //let because we modify some value for scale
    
    sideralRotation /= 1000000; //in hours in API => to convert
    meanRadius /= 10000000;
    aphelion /= 10000000;
    
    const planetModel = useGLTF(planet.model3d);
    const earthOrbit = 365.256;
    const [moons, setMoons] = useState([]);
    const planetRef = useRef()
    const turnArroundSun = useRef()
    const torusRef = useRef()
    
    let color = 'white';

    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180

    useEffect(() => {
    axios
        .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
        .then((res) => setMoons(res.data.bodies));
    }, []);

    const [click, setClick] = useState(false)
  
    const orbitColor = ()=> (
        setClick(!click)
    )

   { click ? color = 'white' : color = 'dimgray'}


useFrame((state, delta)=>{
        
        // planetRef.current.rotation.y += sideralRotation; //rotation sur elle-meme
         turnArroundSun.current.rotation.y += (earthOrbit / sideralOrbit) / 1000; //rotation de la planete autour du soleil

    })

    return (

        <>
                <mesh ref={turnArroundSun}>
                    <Clone
                        ref={planetRef}
                        object={ planetModel.scene }
                        scale={ meanRadius }
                        position={ [aphelion,0 ,0] }
                        rotation={[0, 0 ,-radianAxialTilt]}
                        onClick={orbitColor}
                    />
                
                <Torus
                    ref={torusRef}
                    args={[aphelion,0.01,30,200, (Math.PI * 2 )-0.3]}
                    rotation={[- Math.PI / 2, 0, (Math.PI / 2)-Math.PI / 2.45]}
                    material-color = {color}
                />


                {moons &&
                moons
                .filter((object) => object.bodyType === 'Moon' && object.aroundPlanet.planet === planet.id)
                .map((moon)=>(
                    <Center key={moon.id}  position={[aphelion + moon.aphelion /150000, 0 ,0]}>
                        <Moon moon = {moon} />
                    </Center>
                    ))
                } 


                </mesh>
        </>
    )
}

export default Planet