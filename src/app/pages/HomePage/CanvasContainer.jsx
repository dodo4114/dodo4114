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
  AdaptiveDpr,
} from '@react-three/drei';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Container } from 'app/components/Styled';
// interface Props {
//   personaId: number;
//   setPersona: Function;
// }

export default function CanvasContainer(props) {
  const [isLoading, setIsLoading] = useState(true);
  function stopLoading() {
    setIsLoading(false);
  }
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const canvasSize = props.canvasSize;
  return (
    <MainContainer
      id="canvas-container"
      aria-size={canvasSize}
      style={{ overflow: 'hidden' }}
      {...props}
    >
      {isLoading ? <CenterLoadingIndicator /> : null}
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
          <AdaptiveDpr pixelated />
          <PresentationControls
            global
            zoom={0.8}
            speed={isMobile ? 2 : 1}
            rotation={[Math.PI / 4, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Rooms {...props} scale={1.8} stopLoading={stopLoading} />
          </PresentationControls>
        </Suspense>
        {/* </ScrollControls> */}
      </Canvas>
    </MainContainer>
  );
}

const MainContainer = styled(Container)`
  width: ${p => p['aria-size']}px;
  min-width: ${p => p['aria-size']}px;
  height: ${p => p['aria-size']}px;
  min-height: ${p => p['aria-size']}px;
  aspect-ratio: 1;
  background-color: white;
  padding: 0;
  cursor: pointer;
`;

const CenterLoadingIndicator = styled(LoadingIndicator)`
  align-self: center;
  position: relative;
  top: 50%;
  /* left: 50%; */
`;
