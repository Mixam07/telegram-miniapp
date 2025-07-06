import { useEffect, useState } from "react";

const App = () => {
  const [initData, setInitData] = useState("");
  const [userId, setUserId] = useState("");
  const [log, setLog] = useState("Waiting...");
  const [raw, setRaw] = useState("Loading...");

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

  /*
  try {
    window.Telegram.WebApp.ready();
    setRaw(window.Telegram.WebApp.initData || 'No initData')

    fetch('http://209.38.195.221:3000/v1/auth/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { gameId: '529632d3-a7e6-4522-8db7-492168b44270', initData: window.Telegram.WebApp.initData }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Server response:', data);
      setLog(JSON.stringify(data, null, 2));
    })
    .catch(err => {
      console.error('Fetch error:', err);
      setLog('Fetch error: ' + err.message);
    });
  } catch (err) {
    console.error('Script error:', err);
    setLog('Script error: ' + err.message);
  }
    */

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {window.Telegram.WebApp.initData}
    </div>
  );
};

export default App;

//eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZDZhZjc5MC1jZDNhLTQ5ZTMtOGEzZC1mZjlkZGI4M2IxOTkiLCJpYXQiOjE3NDg0MjA5MzUsImV4cCI6MTc0ODQyMTgzNX0.0wdzcKFowyinjSci38p8ce2i0tgDEfASbBFzKGvCfsk2yYR3L4d2SR_lrIoHiwK0kuOzMtnnQ917hwRtr_ZdKetp69uom7bD567ra79wgIq_H0XEE8UxMN75OBz-TuGKavW0xe7UWXmD4BbG_O55pyhP0g5Y9UGp6xfmBWJZ5KOg-fKo_ufg5H4yaNxXOYM0Sw9ceJdLXvREUoStpbw7OEEIdZsISrqPDC3EgT8njf-H3nu6qzExBVT0PSWbmu64LgozJTDKUUvbLX4A2vlMJVloVAHxdcYzVD-ZzQ2apy5RhYOOdjwxwpszPgbajzgneNMXHhgDsjPMxleQ28MIrA