/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import logo1Model from './logo1.glb';
import logo2Model from './logo2.glb';
import logo3Model from './logo3.glb';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ProjectModels(props) {
  const logo1 = useLoader(GLTFLoader, logo1Model);
  const logo3 = useLoader(GLTFLoader, logo3Model);
  const logo2 = useLoader(GLTFLoader, logo2Model);
  return (
    <group {...props}>
      <primitive
        object={logo1.scene}
        onClick={() => {
          window.open('https://signal.dodo4114.xyz', '_blank');
        }}
      />
      {/* starMe */}
      <primitive
        object={logo3.scene}
        onClick={() => {
          window.open('https://starme.site', '_blank');
        }}
      />
      {/* 2wsz */}
      <mesh
        onClick={() => {
          window.open('https://2wsz.com', '_blank');
        }}
      >
        <primitive object={logo2.scene} />
      </mesh>
    </group>
  );
}