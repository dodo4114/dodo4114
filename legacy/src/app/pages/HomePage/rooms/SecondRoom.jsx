import Monitor from '../objects/Monitor';
import Bookshelf from '../objects/Bookshelf';
import Robot from '../objects/Robot';
import Table from '../objects/Table';
import { useSpring, animated, config } from '@react-spring/three';
import stackImg from './stack.png';

export default function FirstRoom(props) {
  const isMerge = props.isMerge;
  const { opacity } = useSpring({
    opacity: isMerge ? 0 : 1,
    config: config.gentle,
  });

  function onClickMonitor() {
    props.openModal({
      title: 'Developer Stack',
      body: 'My stacks as a developer.\nDjango(DRF), Docker, React, React Native, ThreeJs, Smart Contract via Solidity \n Python, Java, Javascript, Typescript, C#, C++\n and so on. Below is my resume.',
      url: 'http://bit.ly/dodo_resume',
      // image: stackImg,
      modeler: 0,
    });
  }
  const grayColor = 'rgba(100,100,100,1)';

  const walls = [0, 1, 2].map((value, index) => {
    let position = [0, 0, 0];
    let size = [2, 2, 2];
    position[index] = -1 + 0.05;
    size[index] = 0.1;
    const isTheWall = index == 1;

    const density =
      props.isMerge && !isTheWall ? props.angle / ((Math.PI * 2) / 3) : 1;

    return (
      <animated.mesh position={position}>
        <boxGeometry args={size} />
        <animated.meshStandardMaterial
          opacity={isTheWall ? 1 : opacity}
          transparent
          color={isTheWall ? '#F4F1DE' : grayColor}
        />
      </animated.mesh>
    );
  });

  return (
    <group {...props}>
      {walls}
      <Monitor
        position={[0.2, 0, -0.4]}
        scale={[0.3, 0.3, 0.3]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={onClickMonitor}
      />
      <Table position={[0.2, -0.17, -0.4]} />
      <Bookshelf
        position={[-0.8, 0, -0.1]}
        scale={[0.2, 0.2, 0.2]}
        rotation={[0, 0, 0]}
      />
      <Robot position={[-0.6, -0.9, 0.8]} scale={0.15} />
    </group>
  );
}
