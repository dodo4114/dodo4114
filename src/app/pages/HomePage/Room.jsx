import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import internal from 'stream';
import { useFBX, useGLTF, PresentationControls } from '@react-three/drei';

import Bell from './objects/Bell.jsx';
import Box from './rooms/Box';
import useWindowDimensions from 'utils/useWindowDimensions';
import FirstRoom from './rooms/FirstRoom';
import SecondRoom from './rooms/SecondRoom.jsx';
import ThirdRoom from './rooms/ThirdRoom.jsx';
import { useSpring, animated, config } from '@react-spring/three';
// interface Props {
//   personaId: number;
//   setPersona: Function;
// }

export default function Room(props) {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const canvasSize = Math.min(windowWidth, windowHeight);
  console.log(canvasSize);

  const [intervalId, setIntervalId] = useState();

  const personaId = props.personaId;
  const [animatedValue, setAnimatedValue] = useState(0);

  function onClickRoom(id) {
    props.setPersona(id);
  }

  const { first, second, third } = useSpring({
    first: [0, ((personaId - 0) * Math.PI * 2) / 3, 0],
    second: [0, ((personaId - 1) * Math.PI * 2) / 3, 0],
    third: [0, ((personaId - 2) * Math.PI * 2) / 3, 0],
    config: config.gentle,
  });

  const groupPosition = new THREE.Vector3(0, 0, -4);
  const roomPosition = new THREE.Vector3(0, 0, 4);
  return (
    <Container id="canvas-container" aria-size={canvasSize}>
      <Canvas>
        {/* <ambientLight /> */}
        <PresentationControls
          global
          zoom={0.8}
          rotation={[Math.PI / 4, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <directionalLight color="white" position={[5, 4, 3]} />
          <animated.group position={groupPosition} rotation={first}>
            <FirstRoom
              position={roomPosition}
              onClick={() => {
                onClickRoom(0);
              }}
            />
          </animated.group>
          <animated.group position={groupPosition} rotation={second}>
            <SecondRoom
              position={roomPosition}
              onClick={() => {
                onClickRoom(1);
              }}
            />
          </animated.group>
          <animated.group position={groupPosition} rotation={third}>
            <ThirdRoom
              position={roomPosition}
              onClick={() => {
                onClickRoom(2);
              }}
            />
          </animated.group>
        </PresentationControls>
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: ${p => p['aria-size']}px;
  height: ${p => p['aria-size']}px;
  aspect-ratio: 1;
  background-color: white;
`;
