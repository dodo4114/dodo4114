import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import internal from 'stream';
import { useFBX, useGLTF, PresentationControls } from '@react-three/drei';
import Bell from '../objects/Bell';
export default function FirstRoom(props) {
  const walls = [0, 1, 2].map((value, index) => {
    let position = [0, 0, 0];
    let size = [2, 2, 2];
    position[index] = -1 + 0.05;
    size[index] = 0.1;
    return (
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={'green'} />
      </mesh>
    );
  });

  return (
    <group {...props}>
      {walls}
      {/* <Bell position={[0, 0, 0]} scale={[0.02, 0.02, 0.02]} /> */}
    </group>
  );
}
