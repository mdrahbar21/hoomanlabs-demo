"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import fragmentShader from '@/shaders/background-frag.glsl';
import vertexShader from '@/shaders/background-vert.glsl';

interface WaveProps {
  className?: string;
}

const Wave: React.FC<WaveProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const size = 400;
    let velocity = 0.002;
    const wavespeed = 2;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Geometry creation
    const geometry = new THREE.PlaneGeometry(size * 2, size * 2, size, size);

    // Texture creation
    const texture = new THREE.TextureLoader().load('particle.png');
    texture.premultiplyAlpha = true;
    texture.repeat.set(1, 1);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    // Material creation
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        image: { value: texture },
        multiplier: { value: 2.0 },
        time: { value: 0.0 }
      },
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Set initial positions
    points.position.z = 300;
    camera.position.z = 200;
    camera.position.y = 100;
    camera.lookAt(points.position);

    // Clock setup
    const clock = new THREE.Clock();

    // Animation loop
    const animate = () => {
      material.uniforms.time.value += velocity;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};

export default Wave;
