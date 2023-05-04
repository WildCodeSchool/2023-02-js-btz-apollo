import { Clone, Torus, useGLTF, Center } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Moon from './Moon';
import {gsap} from 'gsap';
import './Planet.css'
import { Vector3 } from 'three';

    const Planet = ({planet, moons, indexObject, indexAstre}) => {

    let { meanRadius, aphelion, sideralRotation, axialTilt, sideralOrbit } = planet //let because we modify some value for scale
    
    sideralRotation /= 100000; //in hours in API => to convert
    meanRadius /= 10000000;
    aphelion /= 10000000;
    
    const planetModel = useGLTF(planet.model3d);
    const earthOrbit = 365.256;
    const planetRef = useRef()
    const turnArroundSun = useRef()
    const torusRef = useRef()
    const { camera } = useThree()

    const [isFocus, setIsFocus] = useState(true)
    
    let color = 'white';
    let position = 0
    let planetPosition = new Vector3();
    let pos = {}

    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180

   { indexAstre === indexObject ? color = 'white' : color = 'dimgray'}

   useFrame((state, delta)=>{

       
       position = (planetRef.current.children[0].geometry.getAttribute( 'position' ));
       planetPosition.fromBufferAttribute( position );
       pos = planetRef.current.children[0].getWorldPosition(planetPosition)
       
       const targetPlanet = () => {

        state.camera.lookAt(pos.x, 0, pos.z )

       }

        planetRef.current.rotation.y += sideralRotation; //rotation sur elle-meme
        turnArroundSun.current.rotation.y += (earthOrbit / sideralOrbit) / 1000; //rotation de la planete autour du soleil
        
        if (indexAstre === indexObject){
           
            if(meanRadius > 0.0050 )

           {  gsap.to(camera.position, {
                 x: ()=> pos.x -15,
                 y: ()=> 1,
                 z: ()=> pos.z +8,
                 duration: 2.5
                })

                targetPlanet()
                
            } else if (meanRadius < 0.0050 && meanRadius > 0.0024  )  {

                gsap.to(camera.position, {
                 x: ()=> pos.x -5,
                 y: ()=> 1,
                 z: ()=> pos.z +5,
                 duration: 2.5
                })

                targetPlanet()

            } else {

                 gsap.to(camera.position, {
                 x: ()=> pos.x -1,
                 y: ()=> 1,
                 z: ()=> pos.z + 1,
                 duration: 2.5
                })

                targetPlanet()
            }
            setIsFocus(false)
        }
 
    })

    return (
    <>
            
        <mesh ref={turnArroundSun}>

            <Clone
                ref={planetRef}
                object={ planetModel.scene }
                scale={ meanRadius }
                position={ [aphelion, 0 ,0] }
                rotation={[0, 0 ,-radianAxialTilt]}
                castShadow
            >
            </Clone>


           
                <Torus
                    ref={torusRef}
                    args={[aphelion,0.01,30,200, (Math.PI * 2 )-0.3]}
                    rotation={[- Math.PI / 2, 0, (Math.PI / 2)-Math.PI / 2.45]}
                    material-color = {color}
                    visible={isFocus}
                />

                {moons &&
                moons
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