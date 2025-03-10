// src/components/FallingObjects.jsx
import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallingObjects({
  setScore,
  playerRef,
  onGameOver,
  score,
}) {
  const [fallingObjects, setFallingObjects] = useState([]);

  const getSpeed = (score) => {
    return 0.1 + Math.min(score * 0.003, 0.8);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingObjects((prev) => [
        ...prev,
        {
          id: Math.random(),
          position: [Math.random() * 8 - 4, 4, 0], 
          speed: getSpeed(score),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [score]);

  useFrame(() => {
    setFallingObjects((prev) =>
      prev
        .map((obj) => {
          const newPosition = [
            obj.position[0],
            obj.position[1] - obj.speed,
            obj.position[2],
          ];

          if (playerRef.current) {
            const playerPos = playerRef.current.position;

            const collisionX = Math.abs(newPosition[0] - playerPos.x) < 1;
            const collisionY = Math.abs(newPosition[1] - playerPos.y) < 1;

            if (collisionX && collisionY) {
              setScore((s) => s + 1);
              return null;
            }

            if (newPosition[1] < -6) {
              onGameOver();
              return null;
            }
          }

          return { ...obj, position: newPosition };
        })
        .filter(Boolean)
    );
  });

  return (
    <>
      {fallingObjects.map((obj) => (
        <mesh key={obj.id} position={obj.position}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </>
  );
}
