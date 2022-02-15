import * as THREE from 'three';
import React, { useRef, useState } from 'react';

import useWindowDimensions from 'utils/useWindowDimensions';
import FirstRoom from './rooms/FirstRoom';
import SecondRoom from './rooms/SecondRoom.jsx';
import ThirdRoom from './rooms/ThirdRoom.jsx';
import { useSpring, animated, config } from '@react-spring/three';
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

  // const data = useScroll();
  // useFrame(() => {
  //   // data.offset = current scroll position, between 0 and 1, dampened
  //   // data.delta = current delta, between 0 and 1, dampened

  //   // Will be 0 when the scrollbar is at the starting position,
  //   // then increase to 1 until 1 / 3 of the scroll distance is reached
  //   const a = data.range(0, 0);
  //   console.log(a);
  //   // Will start increasing when 1 / 3 of the scroll distance is reached,
  //   // and reach 1 when it reaches 2 / 3rds.
  //   const b = data.range(1 / 3, 1 / 3);
  //   // Same as above but with a margin of 0.1 on both ends
  //   const c = data.range(1 / 3, 1 / 3, 0.1);
  //   // Will move between 0-1-0 for the selected range
  //   const d = data.curve(1 / 3, 1 / 3);
  //   // Same as above, but with a margin of 0.1 on both ends
  //   // const d = data.curve(1 / 3, 1 / 3, 0.1)
  //   // Returns true if the offset is in range and false if it isn't
  //   const e = data.visible(2 / 3, 1 / 3);
  //   // The visible function can also receive a margin
  //   const f = data.visible(2 / 3, 1 / 3, 0.1);
  // });
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
        />
      </animated.group>
      <animated.group position={groupPosition} rotation={second}>
        <SecondRoom
          isMerge={isMerge}
          position={roomPosition}
          onClick={() => {
            onClickRoom(1);
          }}
        />
      </animated.group>
      <animated.group position={groupPosition} rotation={third}>
        <ThirdRoom
          isMerge={isMerge}
          position={roomPosition}
          onClick={() => {
            onClickRoom(2);
          }}
        />
      </animated.group>
    </group>
  );
}
