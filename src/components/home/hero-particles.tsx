import { useEffect, useRef } from 'react';

interface Point3D {
    x: number;
    y: number;
    z: number;
    baseY: number;
}

export const HeroParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        // Configuration
        const gap = 30; // Distance between points
        const rows = 40;
        const cols = 40;
        const waveSpeed = 0.02;
        const waveHeight = 40;
        const waveFrequency = 0.1;

        // 3D Projection configuration
        const fov = 400;
        const viewDistance = 500;
        const tiltAngle = 0.4; // Tilt the grid to create depth

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2 + 100; // Move down a bit

            time += waveSpeed;

            const points: { x: number, y: number, z: number, size: number, alpha: number }[] = [];

            // Generate grid points
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    // Center the grid
                    const x3d = (c - cols / 2) * gap;
                    const z3d = (r - rows / 2) * gap;

                    // Wave calculation
                    const distance = Math.sqrt(x3d * x3d + z3d * z3d);
                    const y3d = Math.sin(distance * waveFrequency - time) * waveHeight;

                    // Rotate around X axis for tilt
                    const yRotated = y3d * Math.cos(tiltAngle) - z3d * Math.sin(tiltAngle);
                    const zRotated = y3d * Math.sin(tiltAngle) + z3d * Math.cos(tiltAngle);

                    // Apply perspective
                    const zFinal = zRotated + viewDistance;
                    if (zFinal <= 0) continue; // Behind camera

                    const scale = fov / zFinal;
                    const x2d = x3d * scale + centerX;
                    const y2d = yRotated * scale + centerY;

                    // Visual properties
                    // Fade out distant points
                    const alpha = Math.max(0, 1 - zFinal / 1500);
                    const size = Math.max(0.5, 3 * scale);

                    points.push({ x: x2d, y: y2d, size, alpha, z: zFinal });
                }
            }

            // Draw points (sorted by depth to handle occlusion if we were drawing solids, but for dots it matters less, still good practice)
            // points.sort((a, b) => b.z - a.z);

            points.forEach(p => {
                ctx.beginPath();
                // Use small rectangles ("blocks") instead of circles for a techier look
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.4})`;

                // Optional: Highlight crests with accent color
                // if (p.y < centerY - 10) ctx.fillStyle = `rgba(234, 58, 58, ${p.alpha})`;

                ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
                ctx.fill();
            });

            // Draw connecting lines for the "grid" look (optional, can be heavy)
            // For performance, maybe just draw dots or only some lines. 
            // Let's stick to just dense dots/blocks for the "fluid" look without line clutter.

            animationFrameId = requestAnimationFrame(render);
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();
        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hero-particles"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    );
};
