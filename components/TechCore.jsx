'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechCore({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Abstract Tech Core
    const group = new THREE.Group();

    const outerMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.MeshPhongMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.3 })
    );
    group.add(outerMesh);

    const innerMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.5,
      })
    );
    group.add(innerMesh);

    const points = new THREE.Points(
      new THREE.IcosahedronGeometry(2.1, 2),
      new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.05, transparent: true, opacity: 0.6 })
    );
    group.add(points);

    scene.add(group);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const pointLight = new THREE.PointLight(0x00f0ff, 2, 10);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    function onMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    function onResize() {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      group.rotation.x += 0.003;
      group.position.x += (mouseX * 0.5 - group.position.x) * 0.05;
      group.position.y += (mouseY * 0.5 - group.position.y) * 0.05;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />;
}
