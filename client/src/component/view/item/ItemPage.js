import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function ItemPage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );
        var camera2 = new THREE.PerspectiveCamera();
        var renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // FBX 파일 로딩
        var loader = new FBXLoader();
        var fbxPath = process.env.PUBLIC_URL + "/images/TOP_001.fbx";
        loader.load(fbxPath, function (object) {
            scene.add(object);
        });

        // 카메라 위치 설정
        camera.position.z = 1;

        // 애니메이션 루프
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }, []);

    return <canvas ref={canvasRef} />;
}
