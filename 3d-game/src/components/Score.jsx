// src/components/Score.jsx
export default function Score({ score, style }) {
  return (
    <div
      style={{
        ...style,
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        userSelect: "none",
      }}
    >
      {score}
    </div>
  );
}
