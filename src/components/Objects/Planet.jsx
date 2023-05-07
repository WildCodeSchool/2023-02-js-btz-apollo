import { Clone, Torus, useGLTF, Center, CameraControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';
import Moon from './Moon';
import './Planet.css'

const Planet = ({planet, moons, indexObject, indexAstre, handleClicked}) => {

    let { meanRadius, aphelion, sideralRotation, axialTilt, sideralOrbit } = planet //let because we modify some value for scale
    
    sideralRotation /= 100000; //in hours in API => to convert
    meanRadius /= 10000000;
    aphelion /= 10000000;
    
    //conversion des angles de degres (API) vers radians (ThreeJS)
    const radianAxialTilt = (axialTilt * Math.PI) / 180

    const planetModel = useGLTF(planet.model3d);
    const earthOrbit = 365.256;
    const planetRef = useRef()
    const turnArroundSun = useRef()
    const torusRef = useRef()
    const controls=useRef()

    let color = 'white';
    let position = 0
    let planetPosition = new Vector3();
    let pos = {}


   { indexAstre === indexObject ? color = 'white' : color = 'dimgray'}


    useFrame((state, delta)=>{
       position = (planetRef.current.children[0].geometry.getAttribute( 'position' ));
       planetPosition.fromBufferAttribute( position );
       pos = planetRef.current.children[0].getWorldPosition(planetPosition)

        planetRef.current.rotation.y += sideralRotation; //rotation sur elle-meme
        turnArroundSun.current.rotation.y += (earthOrbit / sideralOrbit) / 1000; //rotation de la planete autour du soleil
        
        if (indexAstre === indexObject){
            controls.current.moveTo( pos.x , pos.y , pos.z )
            controls.current.update(delta)

            handleClicked(true)

    }
   })

    return (
    <>
        <mesh ref={turnArroundSun}>

            <CameraControls makeDefault ref={controls} />

            <Clone
                ref={planetRef}
                object={ planetModel.scene }
                scale={ meanRadius }
                position={ [aphelion, 0 ,0] }
                rotation={[0, 0 ,-radianAxialTilt]}
                castShadow
            >
            </Clone>

                {/* <Torus
                    ref={torusRef}
                    args={[aphelion,0.02,30,200, (Math.PI * 2 )-1]}
                    rotation={[- Math.PI / 2, 0, (Math.PI / 2)-Math.PI / 2.95]}
                    material-color = {color}
                /> */}
                

                {moons &&
                moons
                .map((moon)=>(
                    <Center key={moon.id}  position={[aphelion + moon.aphelion / 200000 , 0 ,0]}>
                        <Moon moon = {moon} />
                    </Center>
                    ))
                } 
        </mesh>

        </>
    )
}

export default Planet