import { Clone, Torus, useGLTF, Center, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Moon from './Moon';
import {gsap} from 'gsap';
import './Planet.css'

    const Planet = ({planet, moons, indexObject, indexAstre}) => {

    let { meanRadius, aphelion, sideralRotation, axialTilt, sideralOrbit } = planet //let because we modify some value for scale
    
    sideralRotation /= 10000; //in hours in API => to convert
    meanRadius /= 10000000;
    aphelion /= 10000000;
    
    const planetModel = useGLTF(planet.model3d);
    const earthOrbit = 365.256;
    const planetRef = useRef()
    const turnArroundSun = useRef()
    const torusRef = useRef()
    const {gl, camera} = useThree()
    
    let color = 'white';

    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180


   { indexAstre === indexObject ? color = 'white' : color = 'dimgray'}

useFrame((state, delta)=>{
        
         planetRef.current.rotation.y += sideralRotation; //rotation sur elle-meme
         turnArroundSun.current.rotation.y += (earthOrbit / sideralOrbit) / 10000; //rotation de la planete autour du soleil
        if (indexAstre === indexObject){
            gsap.to(camera.position, {
                x: ()=> aphelion,
                y: ()=> 2,
                z: ()=> 0,
                duration: 2.5
            })
            state.camera.lookAt(aphelion, 0, 0)
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
            />

            <Html
                position={ [ aphelion, 1, 0] }
                wrapperClass='name'
                center
            >
                {planet.englishName}
            </Html>
                            
                <Torus
                    ref={torusRef}
                    args={[aphelion,0.01,30,200, (Math.PI * 2 )-0.3]}
                    rotation={[- Math.PI / 2, 0, (Math.PI / 2)-Math.PI / 2.45]}
                    material-color = {color}
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