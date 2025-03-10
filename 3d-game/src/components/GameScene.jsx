// src/components/GameScene.jsx
"use client";
import { Canvas } from "@react-three/fiber";
import Player from "./Player";
import FallingObjects from "./FallingObjects";
import Score from "./Score";
import { useState, useRef, useCallback, useEffect } from "react";
import GameOverModal from "./GameOverModal";

export default function GameScene() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const playerRef = useRef();
  const gameKey = useRef(0);

  useEffect(() => {
    if (score > 0) {
      const speed = 0.1 + Math.min(score * 0.003, 0.8);
      console.log(`Текущая скорость: ${speed.toFixed(3)}`);
    }
  }, [score]);

  const handleRestart = useCallback(() => {
    setScore(0);
    setGameOver(false);
    gameKey.current += 1;
  }, []);

  if (gameOver) {
    return <GameOverModal score={score} onRestart={handleRestart} />;
  }

  return (
    <div key={gameKey.current}>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "black" }}
        camera={{ position: [0, 5, 10], fov: 50 }}
      >
        <mesh position={[0, -6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 4]} />
          <meshBasicMaterial color="#210b0b" transparent opacity={0.9} />
        </mesh>

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Player ref={playerRef} />
        <FallingObjects
          setScore={setScore}
          playerRef={playerRef}
          onGameOver={() => setGameOver(true)}
          score={score}
        />
      </Canvas>

      <Score
        score={score}
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "48px",
          color: "#00ff00",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}
