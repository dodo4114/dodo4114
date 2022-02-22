import Bell from '../objects/Bell';
import Postbox from '../objects/Postbox';
import Careers from '../objects/Careers';
import Bookshelf from '../objects/Bookshelf';
import PaperAndPen from '../objects/PaperAndPen';
import Cat from '../objects/Cat';
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
    const isTheWall = index == 2;
    const density =
      props.isMerge && !isTheWall ? props.angle / ((Math.PI * 2) / 3) : 1;
    return (
      <animated.mesh position={position}>
        <animated.boxGeometry args={size} />
        <animated.meshStandardMaterial
          opacity={isTheWall ? 1 : opacity}
          transparent
          color={isTheWall ? '#81B29A' : grayColor}
        />
      </animated.mesh>
    );
  });

  return (
    <group {...props}>
      {walls}
      <Postbox
        position={[0.4, 0.2, -0.8]}
        scale={[0.1, -0.1, 0.1]}
        rotation={[0, Math.PI / -2, 0]}
      />
      <Careers
        position={[-1.2, 0.7, 0]}
        scale={0.1}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Bell position={[-0.7, -0.05, -0.4]} scale={[0.2, 0.2, 0.2]} />
      <Table position={[0.2, -0.17, -0.4]} />
      <Cat
        position={[0.7, -0.9, -0.4]}
        scale={0.1}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Bookshelf
        position={[-0.8, 0, -0.1]}
        scale={[0.2, 0.2, 0.2]}
        rotation={[0, 0, 0]}
      />
      <PaperAndPen scale={0.01} position={[-0.1, -0.1, -0.1]} />
    </group>
  );
}
