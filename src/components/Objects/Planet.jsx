import { Clone, useGLTF } from '@react-three/drei';

const Planet = ({planet}) => {

const planetModel = useGLTF(planet.model3d);


  return (

        <Clone
           object={planetModel.scene} 
           scale={planet.equaRadius / 100000} 
           position={[planet.aphelion / 100000,planet.inclination,0]}
        />
  )
}

export default Planet