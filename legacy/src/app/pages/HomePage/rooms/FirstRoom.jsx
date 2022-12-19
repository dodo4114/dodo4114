import Oculus from '../objects/Oculus';
import ProjectLogos from '../objects/ProjectLogos';
import Bookshelf from '../objects/Bookshelf';
import Frame from '../objects/Frame';
import Table from '../objects/Table';
import { useSpring, animated, config } from '@react-spring/three';

export default function FirstRoom(props) {
  const isMerge = props.isMerge;
  const { opacity } = useSpring({
    opacity: isMerge ? 0 : 1,
    config: config.gentle,
  });

  const grayColor = 'rgba(100,100,100,1)';
  const walls = [0, 1, 2].map((value, index) => {
    let position = [0, 0, 0];
    let size = [2, 2, 2];
    position[index] = -1 + 0.05;
    size[index] = 0.1;
    const isTheWall = index == 0;
    const density =
      isMerge && !isTheWall ? props.angle / ((Math.PI * 2) / 3) : 1;
    return (
      <animated.mesh position={position}>
        <boxGeometry args={size} />
        <animated.meshStandardMaterial
          transparent
          opacity={isTheWall ? 1 : opacity}
          color={isTheWall ? '#3D405B' : grayColor}
        />
      </animated.mesh>
    );
  });
  return (
    <group {...props}>
      {walls}
      <Oculus
        position={[-0.65, -0.6, -0.35]}
        scale={0.0007}
        rotation={[0, Math.PI / 4, 0]}
      />
      <ProjectLogos
        position={[-0.4, 0.7, -0.9]}
        scale={0.2}
        rotation={[0, -Math.PI / 2, 0]}
        openModal={props.openModal}
      />
      <Table position={[0.2, -0.17, -0.4]} />
      <Bookshelf
        position={[-0.8, 0, -0.1]}
        scale={[0.2, 0.2, 0.2]}
        rotation={[0, 0, 0]}
      />
      <Frame
        position={[-0.9, 0.65, 0.75]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.2}
        openModal={props.openModal}
      />
    </group>
  );
}
