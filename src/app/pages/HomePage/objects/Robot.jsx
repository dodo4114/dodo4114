/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import robot from './robot.glb';
export default function Robot(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(robot);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[1.16, 0.17, 1.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 0.29, 0]}
        scale={[0.91, 0.13, 0.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.003']}
        position={[0, 0.54, 0.01]}
        scale={[0.66, 0.07, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0.42, 1.49, -0.15]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.47, -0.08, 0.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[0.43, 1.49, -0.04]}
        rotation={[Math.PI / 2, -0.21, 0]}
        scale={[0.4, 0.05, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[0.43, 1.49, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.27, 0.1, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-1.36, 3.02, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.33, 0.04, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-1.1, 3.02, -0.37]}
        scale={[0.43, 0.38, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-0.64, 3.03, -0.37]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.16, 0.05, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[0.89, 2.94, -0.37]}
        rotation={[0, 0, -1.76]}
        scale={[0.13, 0.04, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[0.19, 3.03, -0.22]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.19, 0.02, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[0.19, 3.03, -0.53]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.19, 0.02, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[0.48, 3.03, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
        position={[0.48, 3.03, -0.56]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[-1.36, 3.02, -0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.22, 0.08, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[1.3, 2.89, -0.63]}
        rotation={[0, 0.24, 0]}
        scale={[0.16, 0.05, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[1.37, 2.91, -0.59]}
        rotation={[0, 0.26, -Math.PI / 2]}
        scale={[0.01, 0.17, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={nodes.Cylinder014.material}
        position={[1.28, 2.91, -0.57]}
        rotation={[0, 0.26, -Math.PI / 2]}
        scale={[0.02, 0.07, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[1.3, 2.89, -0.13]}
        rotation={[0, -0.24, 0]}
        scale={[0.16, 0.05, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={nodes.Cylinder016.material}
        position={[1.37, 2.91, -0.17]}
        rotation={[0, -0.26, -Math.PI / 2]}
        scale={[0.01, 0.17, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
        position={[1.28, 2.91, -0.2]}
        rotation={[0, -0.26, -Math.PI / 2]}
        scale={[0.02, 0.07, -0.02]}
      />
    </group>
  );
}

useGLTF.preload('/robot.glb');