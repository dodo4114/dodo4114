import { useSpring, animated, config } from '@react-spring/three';

export default function Table(props) {
  let size = [1.5, 0.1, 0.8];
  return (
    <mesh {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={'#F4F1DE'} />
    </mesh>
  );
}
