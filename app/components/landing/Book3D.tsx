"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Book() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Smooth floating rotation based on mouse
        const { x, y } = state.mouse;

        // Target rotation
        const targetRotX = y * 0.3; // Tilt up/down
        const targetRotY = x * 0.4 - 0.4; // Tilt left/right (centered slightly left to show cover)

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    });

    const coverColor = "#1a1a1a"; // Premium Black
    const pageColor = "#f1f5f9";  // Off-white pages
    const goldAccent = "#d4af37"; // Subtle gold foil

    return (
        <group ref={groupRef} rotation={[0, -0.4, 0]}>
            {/* Front Cover */}
            <mesh position={[0, 0, 0.26]} castShadow receiveShadow>
                <boxGeometry args={[3.1, 4.3, 0.05]} />
                <meshStandardMaterial color={coverColor} roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Back Cover */}
            <mesh position={[0, 0, -0.26]} castShadow receiveShadow>
                <boxGeometry args={[3.1, 4.3, 0.05]} />
                <meshStandardMaterial color={coverColor} roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Spine (Curved) */}
            <mesh position={[-1.55, 0, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.1, 4.3, 0.56]} />
                <meshStandardMaterial color={coverColor} roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Pages Block */}
            <mesh position={[0.05, 0, 0]} castShadow>
                <boxGeometry args={[2.9, 4.2, 0.48]} />
                <meshStandardMaterial color={pageColor} roughness={0.8} />
            </mesh>

            {/* Title Text (Conceptual - Simple Gold Strip for minimalism) */}
            <mesh position={[0.5, 1.2, 0.29]}>
                <boxGeometry args={[1.5, 0.02, 0.01]} />
                <meshStandardMaterial color={goldAccent} metalness={0.8} roughness={0.2} emissive={goldAccent} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0.5, 1.0, 0.29]}>
                <boxGeometry args={[1.0, 0.02, 0.01]} />
                <meshStandardMaterial color={goldAccent} metalness={0.8} roughness={0.2} emissive={goldAccent} emissiveIntensity={0.2} />
            </mesh>

        </group>
    );
}

export default function Book3D() {
    return (
        <div className="w-full h-[600px] flex items-center justify-center cursor-move active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Float
                    speed={2} // Animation speed
                    rotationIntensity={0.2} // XYZ rotation intensity
                    floatIntensity={0.5} // Up/down float intensity
                    floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
                >
                    <Book />
                </Float>

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
