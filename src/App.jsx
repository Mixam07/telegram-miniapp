import React, { useEffect, useState } from 'react';

const TelegramAuth = () => {
  const [initData, setInitData] = useState<string>('Loading...');
  const [serverResponse, setServerResponse] = useState<string>('Waiting...');

  useEffect(() => {
    try {
      window.Telegram.WebApp.ready();

      const data = window.Telegram.WebApp.initData || 'No initData';
      setInitData(data);

      fetch('http://localhost:3000/v1/auth/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId: 'fabda0e7-356f-4cfd-91ec-b992d9beaa7e',
          initData: data,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Server response:', data);
          setServerResponse(JSON.stringify(data, null, 2));
        })
        .catch((err) => {
          console.error('Fetch error:', err);
          setServerResponse('Fetch error: ' + err.message);
        });
    } catch (err: any) {
      console.error('Script error:', err);
      setServerResponse('Script error: ' + err.message);
    }
  }, []);

  return (
    <div>
      <h1>Telegram SDK Auth</h1>
      <h3>initDataRaw:</h3>
      <pre>{initData}</pre>
      <h3>Server response:</h3>
      <pre>{serverResponse}</pre>
    </div>
  );
};

export default TelegramAuth;

/*
import { useEffect, useState } from "react";

const App = () => {
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
*/
  /*
  try {
    window.Telegram.WebApp.ready();
    setRaw(window.Telegram.WebApp.initData || 'No initData')

    fetch('http://localhost:3000/v1/auth/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { gameId: 'fabda0e7-356f-4cfd-91ec-b992d9beaa7e', initData: window.Telegram.WebApp.initData }
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
/*
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Telegram Mini App</h2>
      <p>Ваш Telegram ID: <strong>{userId}</strong></p>
      <button onClick={copyToClipboard}>📋 Копіювати</button><br />
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        🌐 Перейти на сайт
      </a>
      <h1>Telegram SDK Auth</h1>
      <h3>initDataRaw:</h3>
      <pre id="raw">{raw}</pre>
      <h3>Server response:</h3>
      <pre id="log">{log}</pre>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/alarmukraine">силка</a><br/>
      <a href="https://t.me/BotFather">силка на бот</a><br/>
    </div>
  );
};

export default App;
*/
