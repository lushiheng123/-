import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
const CanvasModel = () => {
  return (
    <Canvas
      shadows

      // 这是设置画布的大小的地方
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.2} />
      <Environment preset="city" />
       <CameraRig>
      <Backdrop /> 
        <Center >
            <Shirt />
        </Center>
        </CameraRig>
    </Canvas>
  )
}
export default CanvasModel