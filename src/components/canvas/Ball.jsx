import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ref = useRef();

  useEffect(() => {
    const handleBlur = () => {
      ref.current.rotation.x = 0;
      ref.current.rotation.y = 0;
    }
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('blur', handleBlur);
    }
  })

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={4}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ref} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ab7dd4'
          //a95eeb
          //fff8eb
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, tech }) => {

  const ref = useRef();
  const handleEnter = () => {
    // console.log(tech);
    document.getElementById(tech).style.visibility = 'visible';

  }

  const handleLeave = () => {
    document.getElementById(tech).style.visibility = 'hidden';
  }



  return (
    <Canvas
      // frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;