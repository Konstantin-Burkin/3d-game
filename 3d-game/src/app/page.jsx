// src/app/page.jsx
import Link from "next/link";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>3D Игра на реакции</h1>
      <p>
        Управляйте синим кубом с помощью клавиш <strong>←</strong> и{" "}
        <strong>→</strong>, чтобы ловить красные шары. За каждый пойманный - 2
        очка!
      </p>
      <Link href="/game">
        <button
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
          Начать игру
        </button>
      </Link>
    </div>
  );
}
