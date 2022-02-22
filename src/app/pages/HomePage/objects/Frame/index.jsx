import img from './image.png';
import { useTexture } from '@react-three/drei';
export default function Frame(props) {
  let size = [2, 2, 0.1];

  const [imageMap] = useTexture([img]);

  function onClickFrame() {
    props.openModal({
      title: 'My PFP NFT',
      body: 'Recently, I am very interested in NFT. I bought The ghost project nft with belief for its future. You can see my NFT on Opensea via below link.',
      url: 'https://opensea.io/assets/0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3/4716/',
      image: img,
    });
  }

  return (
    <mesh {...props} onClick={onClickFrame}>
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
