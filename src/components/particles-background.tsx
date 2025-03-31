"use client"; // Since this uses client-side features like useEffect and useState

import { useState, useEffect } from "react";

const ParticleBackground = () => {
    const [particles, setParticles] = useState<
        Array<{ x: number; y: number; size: number; speed: number }>
    >([]);

    useEffect(() => {
        // Create random particles
        const newParticles = Array.from({ length: 5000 }, () => ({
            x: Math.random() * 50000,
            y: Math.random() * 50000,
            size: Math.random() * 10 + 1,
            speed: Math.random() * 0.3 + 0.1,
        }));
        setParticles(newParticles);

        // Animate particles
        const interval = setInterval(() => {
            setParticles((prev) =>
                prev.map((particle) => ({
                    ...particle,
                    y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100,
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-purple-500 opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
