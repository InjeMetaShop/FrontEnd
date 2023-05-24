import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ExPage() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/glTF/scene.gltf"
    );

    return (
        <Canvas
            camera={{ position: [0, 55, 155] }}
            shadows
            style={{ width: 300, height: 300 }}
        >
            {/* 카메라 위치 */}
            <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
            {/* 조명 위치 */}
            <primitive
                object={gltf.scene}
                position={[0, 1, 0]}
                children-0-castShadow
            />
            <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
                <meshStandardMaterial />
            </Circle>
            <OrbitControls target={[0, 30, 0]} /> {/* 캐릭터의 높낮이 */}
            <axesHelper args={[5]} />
            <Stats />
        </Canvas>
    );
}
