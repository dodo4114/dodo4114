import img from './image.png';
import { useTexture } from '@react-three/drei';
export default function Frame(props) {
  let size = [2, 2, 0.1];

  const [imageMap] = useTexture([img]);

  function onClickFrame() {
    const url =
      'https://opensea.io/assets/0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3/4716/';
    window.open(url, '_blank');
  }
  return (
    <mesh scale={0.3} {...props} onClick={onClickFrame}>
      <meshBasicMaterial attach="material" map={imageMap}>
        {/* <texture
          attach="map"
          image={img}
          onUpdate={self => (self.needsUpdate = true)}
        /> */}
      </meshBasicMaterial>
      <boxGeometry args={size} />
    </mesh>
  );
}
