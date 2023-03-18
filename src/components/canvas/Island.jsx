import React, { Suspense, useEffect, useState, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from 'three';

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Island = ({ isMobile }) => {
  const island = useGLTF("./block/scene.gltf");

  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y -= .005;
  });

  return (
    <mesh ref={ref}>
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
        //TRIED TO APPLY ORBIT CONTROLS TO JUST THE DICE TO KEEP PURPLE LIGHT IN PLACE, DIDNT WORK
        {/* <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        /> */}
        <primitive
          object={island.scene}
          scale={isMobile ? 0.002 : 0.005}
          position={isMobile ? [0, -4, -2.2] : [0, -4, 0]}
          rotation={[.04, 0, .04]}
        />
      </group>
    </mesh>
  );
};

const IslandScene = () => {
  //CREATED ANOTHER GROUP IN ORDER TO HAVE A PURPLE LIGHT THAT STAYS IN PLACE,
  //GIVES CONTRAST TO THE ONE SIDE OF THE CUBE THAT IS LIT UP
  const ref = useRef();
  return (
    <group >
      <group ref={ref}>
            <pointLight
            intensity={.85}
            position={[10, 0, 0]}
            color='#c259ff'
          />
      </group>
      <Island/>
    </group>
  );

};

const IslandCanvas = () => {

  // const ref = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (

    <Canvas
      // frameloop='demand'
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
            <IslandScene isMobile={isMobile} />
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas;