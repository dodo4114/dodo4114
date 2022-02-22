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
import signalImg from './signal.png';
import starmeImg from './starme.png';
import twszImg from './2wsz.png';

export default function ProjectModels(props) {
  const logo1 = useLoader(GLTFLoader, logo1Model);
  const logo3 = useLoader(GLTFLoader, logo3Model);
  const logo2 = useLoader(GLTFLoader, logo2Model);

  function onClickSignal() {
    props.openModal({
      title: 'Signal',
      body: 'My first startup product. A social mobile application that you can send anonymous message to your friend with. Now, it is not on Appstore & Playstore.',
      url: 'https://signal.dodo4114.xyz',
      image: signalImg,
      modeler: 1,
    });
  }
  function onClickStarme() {
    props.openModal({
      title: 'StarMe',
      body: 'My second startup product. A social web application that you can get anonymous star-rate from your friend with. Now, its server is closed',
      url: 'https://starme.site',
      image: starmeImg,
      modeler: 1,
    });
  }
  function onClick2wsz() {
    props.openModal({
      title: '2WSZ : TowardsZ',
      body: 'My third startup. A WebXR hub that suggest content for you with 400+ contents. It is live.',
      url: 'https://2wsz.com',
      image: twszImg,
      modeler: 1,
    });
  }

  return (
    <group {...props}>
      <primitive object={logo1.scene} onClick={onClickSignal} />
      {/* starMe */}
      <primitive object={logo3.scene} onClick={onClickStarme} />
      {/* 2wsz */}
      <mesh onClick={onClick2wsz}>
        <primitive object={logo2.scene} />
      </mesh>
    </group>
  );
}
