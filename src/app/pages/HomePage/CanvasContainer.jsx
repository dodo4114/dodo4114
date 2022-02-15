import * as THREE from 'three';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import useWindowDimensions from 'utils/useWindowDimensions';
import Rooms from './Rooms';
import { useSpring, animated, config } from '@react-spring/three';
import {
  useFBX,
  useGLTF,
  PresentationControls,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
// interface Props {
//   personaId: number;
//   setPersona: Function;
// }

export default function CanvasContainer(props) {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const canvasSize = Math.min(windowWidth, windowHeight);
  return (
    <Container
      id="canvas-container"
      aria-size={canvasSize}
      style={{ overflow: 'hidden' }}
      {...props}
    >
      <Canvas
        // frameloop="demand"
        // flat
        // dpr={[1, 2]}
        // camera={{ fov: 25, position: [0, 0, 8] }}
        style={{ overflow: 'hidden' }}
      >
        {/* <ScrollControls
          pages={4}
          // distance={0}
          // infinite={true}
        > */}
        <Suspense fallback={null}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[Math.PI / 4, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Rooms {...props} scale={1.8} />
          </PresentationControls>
        </Suspense>
        {/* </ScrollControls> */}
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: ${p => p['aria-size']}px;
  height: ${p => p['aria-size']}px;
  aspect-ratio: 1;
  background-color: white;
  padding: 0;
  cursor: pointer;
`;
