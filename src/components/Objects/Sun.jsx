import { Clone, useGLTF } from '@react-three/drei';

const Sun = ({sun}) => {

const sunModel = useGLTF(sun.model3d);

  return (
        <Clone
           object={sunModel.scene} scale={sun.equaRadius / 1000000}
        />
  )
}

export default Sun