// src/app/Layout.js
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
