import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
}

const AnimatedBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    delay: Math.random() * 2,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-blue-500/10 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
