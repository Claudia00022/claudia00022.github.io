import { Canvas } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import { Particles } from './Particles'

export default function TestTwo() {
 
  return (
    <> 
    <div className='h-screen'>
      <Canvas   camera = { {fov: 25, position: [0, 0, 6] }}>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
      <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} />
      <Particles />
      </Canvas>
      </div>
    </>
  )
}
