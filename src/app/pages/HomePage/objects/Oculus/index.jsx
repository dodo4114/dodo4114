import { useFBX } from '@react-three/drei';
import oculus from './oculus.fbx';

import React, { useRef } from 'react';

export default function Oculus(props) {
  const fbx = useFBX(oculus);
  return <primitive object={fbx} {...props} />;
}
