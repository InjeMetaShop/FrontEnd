// import { Stats, OrbitControls, Circle } from "@react-three/drei";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export default function ExPage() {
//     const gltf = useLoader(
//         GLTFLoader,
//         process.env.PUBLIC_URL + "/glTF/scene.gltf"
//     );

//     return (
//         <Canvas
//             camera={{ position: [0, 55, 155] }}
//             shadows
//             style={{ width: 300, height: 300 }}
//         >
//             {/* 카메라 위치 */}
//             <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
//             {/* 조명 위치 */}
//             <primitive
//                 object={gltf.scene}
//                 position={[0, 1, 0]}
//                 children-0-castShadow
//             />
//             <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
//                 <meshStandardMaterial />
//             </Circle>
//             <OrbitControls target={[0, 30, 0]} /> {/* 캐릭터의 높낮이 */}
//             <axesHelper args={[5]} />
//             <Stats />
//         </Canvas>
//     );
// }

import { Stats, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function ExPage() {
    const { scene } = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/glTF/scene.gltf"
    );

    // 모델의 재질 정보를 설정합니다.
    scene.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial();
        }
    });

    return (
        <Canvas
            camera={{ position: [0, 55, 155] }}
            shadows
            style={{ width: 300, height: 300 }}
        >
            <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
            <primitive
                object={scene}
                position={[0, 1, 0]}
                castShadow
                receiveShadow
            />
            <OrbitControls target={[0, 30, 0]} />
            <axesHelper args={[5]} />
            <Stats />
        </Canvas>
    );
}
