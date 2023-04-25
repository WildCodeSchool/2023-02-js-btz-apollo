import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import './Scene.css'

const Scene = () => {
  return (
    <div className='scene'>
        <Header />
            <div className="canvas">
                <Canvas>
                    <Stars radius={100} depth={50} count={15000} factor={4} saturation={0} fade speed={1} />
                    <OrbitControls makeDefault />
                </Canvas>
            </div>
        <Navbar />
    </div>
  )
}

export default Scene