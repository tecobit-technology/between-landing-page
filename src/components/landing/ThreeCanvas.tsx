import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, particles: THREE.Points;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let animationFrameId: number;

        const init = () => {
            const container = mountRef.current;
            if (!container) return;

            scene = new THREE.Scene();
            // Soft pinkish fog to blend with the background
            scene.fog = new THREE.FogExp2(0xfaf5f7, 0.001);

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            const isMobile = window.innerWidth < 768;
            camera.position.z = isMobile ? 800 : 500;

            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            createHeartParticles();

            document.addEventListener('mousemove', onMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
        };

        const createHeartParticles = () => {
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            const colors = [];

            // Heart shape equation
            const heartShape = (t: number) => {
                const x = 16 * Math.pow(Math.sin(t), 3);
                const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
                return { x, y };
            };

            // Reduce number of hearts for a cleaner look
            const numHearts = 6;
            const particlesPerHeart = 70;

            for (let h = 0; h < numHearts; h++) {
                const isMobile = window.innerWidth < 768;
                const spreadX = isMobile ? 600 : 1100;
                const spreadY = isMobile ? 800 : 600;

                const offsetX = (Math.random() - 0.5) * spreadX;
                const offsetY = (Math.random() - 0.5) * spreadY;
                const offsetZ = (Math.random() - 0.5) * 600;

                for (let i = 0; i < particlesPerHeart; i++) {
                    const t = (i / particlesPerHeart) * Math.PI * 2;
                    const point = heartShape(t);

                    vertices.push(
                        point.x * 4 + offsetX,
                        point.y * 4 + offsetY,
                        offsetZ
                    );

                    // Color Palette: Deep Rose to Soft Coral
                    // Needed to stand out against the light background
                    const r = Math.random();
                    if (r > 0.6) {
                        // Deep Rose
                        colors.push(0.9, 0.3, 0.4);
                    } else if (r > 0.3) {
                        // Soft Pink
                        colors.push(1.0, 0.6, 0.7);
                    } else {
                        // Muted Mauve
                        colors.push(0.8, 0.5, 0.6);
                    }
                }
            }

            // Add subtle floating particles (dust)
            for (let i = 0; i < 150; i++) {
                vertices.push(
                    (Math.random() - 0.5) * 2000,
                    (Math.random() - 0.5) * 1200,
                    (Math.random() - 0.5) * 1000
                );

                // Subtle grey/pink dust
                colors.push(0.8, 0.7, 0.75);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const isMobile = window.innerWidth < 768;
            const material = new THREE.PointsMaterial({
                size: isMobile ? 3 : 4,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                // Normal blending usually looks better on light backgrounds than additive
                blending: THREE.NormalBlending
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);
        };

        const onMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX) * 0.1;
            mouseY = (event.clientY - windowHalfY) * 0.1;
        };

        const onWindowResize = () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            const isMobile = window.innerWidth < 768;
            camera.position.z = isMobile ? 800 : 500;
            if (particles && particles.material instanceof THREE.PointsMaterial) {
                particles.material.size = isMobile ? 3 : 4;
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            if (particles) {
                particles.rotation.y += 0.001;

                // Gentle pulsing breathing effect
                const time = Date.now() * 0.001;
                if (particles.material instanceof THREE.PointsMaterial) {
                    // particles.material.opacity = 0.6 + Math.sin(time) * 0.2; 
                    // Scale pulsing instead of opacity for better visibility on light bg
                    particles.scale.setScalar(1 + Math.sin(time) * 0.05);
                }
            }

            renderer.render(scene, camera);
        };

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);

            if (mountRef.current && renderer && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            if (renderer) renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            id="canvas-container"
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default ThreeCanvas;
