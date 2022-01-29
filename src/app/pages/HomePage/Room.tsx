import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
export default function Room() {
  return (
    <Container id="canvas-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[2, 0, 0]} />
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: 60vw;
  aspect-ratio: 1;
  max-height: 80vh;
  min-height: 500px;
  min-width: 500px;
  background-color: black;
`;
