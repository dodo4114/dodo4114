import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';

import useWindowDimensions from 'utils/useWindowDimensions';
import FirstRoom from './rooms/FirstRoom';
import SecondRoom from './rooms/SecondRoom.jsx';
import ThirdRoom from './rooms/ThirdRoom.jsx';
import { useSpring, animated, config } from '@react-spring/three';
import { useProgress } from '@react-three/drei';
// interface Props {
//   personaId: number;
//   setPersona: Function;
// }

export default function Rooms(props) {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const canvasSize = Math.min(windowWidth, windowHeight);
  const [intervalId, setIntervalId] = useState();

  const { progress } = useProgress();

  useEffect(() => {
    if (progress >= 100) {
      props.stopLoading();
    }
  }, [progress]);
  const personaId = props.personaId ? props.personaId : 0;

  function onClickRoom(id) {
    props.setPersona(id);
  }
  const isMerge = props.isMerge;
  const { first, second, third } = useSpring({
    first: isMerge ? [0, 0, 0] : [0, ((personaId - 0) * Math.PI * 2) / 3, 0],
    second: isMerge ? [0, 0, 0] : [0, ((personaId - 1) * Math.PI * 2) / 3, 0],
    third: isMerge ? [0, 0, 0] : [0, ((personaId - 2) * Math.PI * 2) / 3, 0],
    config: config.gentle,
  });

  const groupPosition = new THREE.Vector3(0, 0, -4);
  const roomPosition = new THREE.Vector3(0, 0, 4);
  return (
    <group {...props}>
      <directionalLight color="white" position={[5, 4, 3]} intensity={2} />
      <ambientLight color="white" intensity={0.3} />
      <animated.group position={groupPosition} rotation={first}>
        <FirstRoom
          isMerge={isMerge}
          position={roomPosition}
          onClick={() => {
            onClickRoom(0);
          }}
          openModal={props.openModal}
        />
      </animated.group>
      <animated.group position={groupPosition} rotation={second}>
        <SecondRoom
          isMerge={isMerge}
          position={roomPosition}
          onClick={() => {
            onClickRoom(1);
          }}
          openModal={props.openModal}
        />
      </animated.group>
      <animated.group position={groupPosition} rotation={third}>
        <ThirdRoom
          isMerge={isMerge}
          position={roomPosition}
          onClick={() => {
            onClickRoom(2);
          }}
          openModal={props.openModal}
        />
      </animated.group>
    </group>
  );
}
