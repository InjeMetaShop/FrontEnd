import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const ModelRender = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;

    const init = () => {
      const container = containerRef.current;

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.25,
        20
      );
      camera.position.set(1, 1, 4.5);

      scene = new THREE.Scene();

      new RGBELoader()
        .setPath(process.env.PUBLIC_URL + "/textures/equirectangular/")
        .load("royal_esplanade_1k.hdr", function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;

          scene.background = texture;
          scene.environment = texture;

          render();

          const loader = new GLTFLoader().setPath(
            process.env.PUBLIC_URL + "/gl/"
          );
          loader.load("down_1.gltf", function (gltf) {
            const model = gltf.scene;

            model.scale.set(7, 7, 7);
            model.position.set(0, -2.5, 0); //
            model.rotation.set(0, 60, 0); // 모델을 180도 회전 (여기서는 Y 축을 Math.PI로 설정)
            scene.add(model);
            render();
          });
        });

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(900, 800);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", render);
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.target.set(0, 0, -0.2);
      controls.update();

      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ModelRender;
