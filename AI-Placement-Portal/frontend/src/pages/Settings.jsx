
import React, { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  const saveSettings = () => {
    localStorage.setItem('placeAISettings', JSON.stringify({
      notifications,
      darkMode
    }));

    setMessage('Settings saved successfully!');
  };

  return (
    <div className="module-container">
      <h2>Settings</h2>
      <p>Manage your PlaceAI preferences.</p>

      <div className="module-card">
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
          />
          Enable notifications
        </label>
      </div>

      <div className="module-card" style={{ marginTop: 20 }}>
        <h3>Appearance</h3>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
          />
          Enable dark mode preference
        </label>
        <p>Currently saves your preference; full theme switching can be added next.</p>
      </div>

      <button onClick={saveSettings} style={{ marginTop: 20 }}>
        Save Settings
      </button>

      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}
