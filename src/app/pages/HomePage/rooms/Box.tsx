import * as THREE from 'three';
import { useRef, useState } from 'react';

interface BoxProps {
  selected: boolean;
  onClick: Function;
  index: number;
}
export default function Box(props: JSX.IntrinsicElements['mesh'] & BoxProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const colorList = ['green', 'blue', 'orange'];
  return (
    <mesh
      {...props}
      ref={ref}
      scale={props.selected ? 1.5 : 1}
      onClick={event => {
        props.onClick(event);
      }}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? 'hotpink' : colorList[props.index]}
      />
    </mesh>
  );
}
