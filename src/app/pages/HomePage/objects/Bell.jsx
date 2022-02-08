import { useFBX, useGLTF, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import bell from './bell.fbx';

export default function Bell(props) {
  const fbx = useFBX(bell);
  // const fbx = useLoader(FBXLoader, bell);
  return <primitive object={fbx} {...props} />;
}
