"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const Globe = ({
    className,
    config = {},
}: {
    className?: string;
    config?: any;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const phiRef = useRef(0);

    useEffect(() => {
        let width = 0;
        let currentPhi = 0;
        let targetPhi = 0;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };

        window.addEventListener("resize", onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [34 / 255, 197 / 255, 94 / 255],
            glowColor: [0.9, 0.9, 0.9],
            markers: [
                { location: [28.6139, 77.209], size: 0.05 }, // New Delhi
                { location: [40.7128, -74.006], size: 0.05 }, // New York
                { location: [51.5074, -0.1278], size: 0.05 }, // London
                { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
                { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
                { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
                { location: [22.3193, 114.1694], size: 0.05 }, // Hong Kong
                { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
                { location: [52.52, 13.405], size: 0.05 }, // Berlin
                { location: [48.8566, 2.3522], size: 0.05 }, // Paris
            ],
            onRender: (state) => {
                // Smooth spring animation - lerp towards target
                if (pointerInteracting.current === null) {
                    // Auto-rotate when not interacting
                    targetPhi += 0.003;
                }
                // Smooth interpolation (spring effect)
                currentPhi += (targetPhi - currentPhi) * 0.1;
                state.phi = currentPhi;
                state.width = width * 2;
                state.height = width * 2;
                phiRef.current = currentPhi;
            },
            ...config,
        });

        // Store update function for interactions
        const updateTargetPhi = (delta: number) => {
            targetPhi = phiRef.current + delta / 150;
        };

        // Attach to canvas ref for event handlers
        (canvasRef.current as any).__updatePhi = updateTargetPhi;

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        }, 100);

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [config]);

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        pointerInteracting.current = e.clientX;
        pointerInteractionMovement.current = 0;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
        }
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
        pointerInteracting.current = null;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
        }
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            pointerInteracting.current = e.clientX; // Update reference point

            // Call the update function
            if ((canvasRef.current as any)?.__updatePhi) {
                (canvasRef.current as any).__updatePhi(delta);
            }
        }
    };

    return (
        <div
            className={className}
            style={{
                width: "100%",
                height: "100%",
                aspectRatio: "1",
                position: 'relative',
                pointerEvents: 'none', // Container doesn't capture events
            }}
        >
            <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onPointerMove={handlePointerMove}
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    aspectRatio: "1",
                    opacity: 0,
                    transition: "opacity 1s ease",
                    cursor: 'grab',
                    borderRadius: '50%', // Circular hit area
                    pointerEvents: 'auto', // Only canvas captures events
                    userSelect: 'none',
                    touchAction: 'none', // Prevent scroll while dragging
                }}
            />
        </div>
    );
};
