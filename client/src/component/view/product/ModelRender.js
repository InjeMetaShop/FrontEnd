import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import axios from 'axios'

const ModelRender = (props) => {
  const [product, setProduct] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")
  const [currentName, setCurrentName] = useState("")
  const containerRef = useRef(null);
  
  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  useEffect(() => {
    setCurrentCategory(product.category);
    setCurrentName(product.name);
  }, [product]);

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
      camera.position.set(4, 2, 3.5);

      scene = new THREE.Scene();

      // 그리드 생성
      const gridHelper = new THREE.GridHelper(100, 100);
      scene.add(gridHelper);

      new RGBELoader()
        .setPath(process.env.PUBLIC_URL + "/textures/equirectangular/")
        .load("royal_esplanade_1k.hdr", function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;

          // 배경을 그리드로 변경
          scene.background = gridHelper;
          scene.environment = texture;

          render();

          const loader = new GLTFLoader().setPath(
            process.env.PUBLIC_URL + "/gltf/cloth/Knit_Cloth/"
          );
          loader.load("Knit_Cloth.gltf", function (gltf) {
            const model = gltf.scene;

            if (currentCategory === "up") {
              model.scale.set(7, 7, 7);
            } else {
              model.scale.set(1, 1, 1);
            }
            model.position.set(0, -4.0, 0);
            model.rotation.set(0, 60, 0);
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
      controls.target.set(0, 0, 0);
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


    if (currentCategory && currentName) {
      init();
    }
  }, [currentCategory, currentName]);

  return <> <div ref={containerRef} /></>;
};

export default ModelRender;
