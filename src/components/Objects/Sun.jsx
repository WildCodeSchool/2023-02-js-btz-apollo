import { Clone, useGLTF } from '@react-three/drei';

const Sun = ({sun}) => {

const sunModel = useGLTF(sun.model3d);
let {meanRadius} = sun

meanRadius /= 100000000

console.log(sunModel);

  return (
        <Clone
            object={sunModel.scene} 
            scale={meanRadius}         
        />
  )
}

export default Sun