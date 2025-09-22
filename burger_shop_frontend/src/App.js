import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop1 from './components/Desktop1';
import Desktop2 from './components/Desktop2';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('desktop1');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const renderView = () => {
    if (view === 'desktop2') return <Desktop2 />;
    return <Desktop1 />;
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: 16 }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <nav aria-label="Screen Switcher" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12 }}>
          <button onClick={() => setView('desktop1')} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', cursor: 'pointer' }}>
            Desktop-1
          </button>
          <button onClick={() => setView('desktop2')} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', cursor: 'pointer' }}>
            Desktop-2
          </button>
        </nav>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderView()}
      </div>
    </div>
  );
}

export default App;
