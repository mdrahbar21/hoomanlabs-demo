"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { TextureLoader, PlaneGeometry, Points, RepeatWrapping, ShaderMaterial } from 'three';
import fragmentShader from '@/shaders/background-frag.glsl'
import vertexShader from '@/shaders/background-vert.glsl';
import particleImage from '@/assets/particle.png'; 

const Background: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new PlaneGeometry(width, height, height / 8, width / 8);

    const texture = new TextureLoader().load('/particle.png');
    texture.premultiplyAlpha = true;
    texture.repeat.set(1, 1);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;

    const material = new ShaderMaterial({
      transparent: true,
      uniforms: {
        image: { value: texture },
        multiplier: { value: 0 },
        time: { value: 0 },
      },
      fragmentShader,
      vertexShader,
      depthTest: false,
      depthWrite: false,
    });

    const points = new Points(geometry, material);
    scene.add(points);

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      points.material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    const onRouteChange = (url: string) => {
      if (url === '/home') {
        gsap.to(points.material.uniforms.multiplier, {duration:5,  value: 5 });
        gsap.to(points.position, {duration:1,  y: -height / 4 });
        gsap.to(points.rotation, {duration:1,  x: -Math.PI / 2 });
        gsap.to(points, {duration:2,  velocity: 0.005 });
      } else {
        gsap.to(points.material.uniforms.multiplier, {duration:1,  value: 5 });
        gsap.to(points.position, {duration:1,  y: 0 });
        gsap.to(points.rotation, {duration:1,  x: 0 });
        gsap.to(points, {duration:1,  velocity: 0.01 });
      }
    };

    window.addEventListener('popstate', () => onRouteChange(window.location.pathname));

    return () => {
      window.removeEventListener('popstate', () => onRouteChange(window.location.pathname));
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Background;
