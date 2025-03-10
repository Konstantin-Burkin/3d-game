// src/components/Player.jsx
import { forwardRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Player = forwardRef((props, ref) => {
  const moveSpeed = 0.2;
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setDirection(-1);
      else if (e.key === "ArrowRight") setDirection(1);
    };

    const handleKeyUp = (e) => {
      if (["ArrowLeft", "ArrowRight"].includes(e.key)) setDirection(0);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += moveSpeed * direction;
    }
  });

  return (
    <mesh ref={ref} position={[0, -5, 0]}>
      {" "}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
});

export default Player;
