import React, { Suspense, useEffect, useState, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from 'three';

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Island = (props) => {
  const island = useGLTF("./block/scene.gltf");
  // console.log('this is is mobile', props.isMobile);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y -= .005;
  });

  return (
    <mesh
    ref={ref}
    >
      <spotLight
        position={[0, -20, 20]}
        angle={0.22}
        penumbra={1}
        intensity={.2}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-.1, -20, -10]}
        angle={0.4}
        penumbra={1}
        intensity={.7}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight
      intensity={.1}
      />
      <group>
      <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        <primitive
          object={island.scene}
          scale={isMobile ? 0.0035 : 0.005}
          position={isMobile ? [0, -3, 0] : [0, -4, 0]}
          rotation={[.04, 0, .04]}
        />
      </group>
    </mesh>
  );
};

const IslandScene = () => {

  return (
    <group >
      <group >
            <pointLight
            intensity={.85}
            position={[10, 0, 0]}
            color='#c259ff'
          />
          <pointLight
            intensity={.85}
            position={[-10, 0, 0]}
            color='#c259ff'
          />
      </group>
      <Island/>
    </group>
  );

};

const IslandCanvas = () => {



  return (

    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
            <IslandScene/>
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas;