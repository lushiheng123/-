

import React, { Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { CustomButton,Navbar } from '../components';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
export default function Welcome() {
    return (
      <AnimatePresence>
      <div className="welcome_page" >
          <Navbar />
          <div className='welcome_container'>
              <div className='welcome_left' >
                  <h1 className='welcome_title'>3D,Valtio,Tailwindcss</h1>
                  <div className="welcome_whatwedo">
                      <img src="./imgs/line.png" alt="" className="welcome_line" />
                      <h2 className="welcome_subtitle">简单使用建立购物界面</h2>
                  </div>
                  <h2 className="welcome_desc">作为一个不太成熟的例子展示</h2>
                  <button className="welcome_button">Let's Start</button>
              </div>
              <div className="welcome_right" > 
                 <div className='welcome_canvas_wrapper'>
                          <Canvas className='welcome_canvas' >
                            <Suspense fallback={null}>
                          <OrbitControls enableZoom={false} />
                          <ambientLight intensity={1} />
                          <directionalLight position={[3, 2, 1]} />
                          <Sphere args={[1, 100, 200]} scale={2.5}>
                                <MeshDistortMaterial
                                  color="#3d1c56"
                                  attach="material"
                                    distort={0.5}
                                    speed={2} 
                                />
                          </Sphere>
                          </Suspense>
                      </Canvas>
              </div>
              <motion.div className='welcome_img'
                animate={{ y: [-5, 5, -5, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
              >
                <img src="./imgs/moon.png" alt="img" className="welcome_img" />
                </motion.div>
              </div>
              </div>
            </div>
            </AnimatePresence>
  )
};
