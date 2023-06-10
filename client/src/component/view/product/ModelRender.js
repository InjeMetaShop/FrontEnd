import { Stats, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Paper } from "@mui/material";
import * as THREE from "three";

export default function ModelRender() {
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
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                margin: "auto",
            }}
        >
            <Canvas
                camera={{ position: [3, 55, 100] }}
                shadows
                style={{ width: 700, height: 700 }}
            >
                <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
                <directionalLight position={[-3.3, -1.0, -4.4]} castShadow />
                <primitive
                    object={scene}
                    position={[1, -30, 5]}
                    castShadow
                    receiveShadow
                />
                <OrbitControls target={[0, 30, -10]} />
                <axesHelper args={[5]} />
                {/* <Stats /> */}
            </Canvas>
        </Paper>
    );
}
