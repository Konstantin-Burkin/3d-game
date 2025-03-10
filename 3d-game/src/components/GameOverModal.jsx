// src/components/GameOverModal.jsx
import { useCallback } from "react";

export default function GameOverModal({ score, onRestart }) {
  const handleRestartClick = useCallback(() => {
    onRestart();
  }, [onRestart]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        gap: "20px",
        zIndex: 1000,
      }}
    >
      <h1>Игра окончена!</h1>
      <p>Ваш счет: {score}</p>
      <button
        onClick={handleRestartClick}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Начать заново
      </button>
    </div>
  );
}
