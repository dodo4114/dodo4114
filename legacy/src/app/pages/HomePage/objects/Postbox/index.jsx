/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import postbox from './postbox.glb';

export default function Postbox(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(postbox);
  function onClickPostBox() {
    props.openModal({
      title: 'Contact',
      body: 'email : dodo41142727@gmail.com\ngithub : dodo4114\ninstagram : dohyeon_1027',
      modeler: 0,
      // url: 'http://bit.ly/dodo_resume',
      // image: stackImg,
    });
  }
  return (
    <group ref={group} {...props} dispose={null} onClick={onClickPostBox}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[0.36, 0, -4.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        position={[2.45, 1.28, -3.61]}
        rotation={[0, 0, 1.57]}
        scale={[-1.03, 1.03, 1.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.003']}
        position={[3.58, 0.8, -5.51]}
        rotation={[2, -0.53, -0.82]}
        scale={[0.65, 0.65, 0.65]}
      />
    </group>
  );
}

useGLTF.preload(postbox);