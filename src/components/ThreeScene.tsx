
import React, { useEffect, useRef } from 'react';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.THREE || !mountRef.current) return;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating cubes
    const cubes: any[] = [];
    const cubeGeometry = new window.THREE.BoxGeometry(0.5, 0.5, 0.5);
    
    for (let i = 0; i < 20; i++) {
      const cubeMaterial = new window.THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      
      const cube = new window.THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(cube);
      cubes.push(cube);
    }

    // Create particles
    const particleGeometry = new window.THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new window.THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.1,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new window.THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.005 + index * 0.001;
        cube.rotation.y += 0.005 + index * 0.001;
        cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      // Rotate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} id="three-container" />;
};

export default ThreeScene;
