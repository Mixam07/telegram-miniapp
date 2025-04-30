import { useEffect, useState } from "react";

const App = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Розгортає мініапку
    const id = tg?.initDataUnsafe?.user?.id;
    if (id) {
      setUserId(id.toString());
    } else {
      setUserId("ID не знайдено");
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId);
    alert("Скопійовано: " + userId);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Telegram Mini App</h2>
      <p>Ваш Telegram ID: <strong>{userId}</strong></p>
      <button onClick={copyToClipboard}>📋 Копіювати</button><br />
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        🌐 Перейти на сайт
      </a>
    </div>
  );
};

export default App;