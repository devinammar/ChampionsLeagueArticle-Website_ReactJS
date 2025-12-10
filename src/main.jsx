import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css'
import { Dashboard } from './pages/dashboard';
import { Topscore } from './pages/topscore';
import { Champions } from './pages/champions';
import { History } from './pages/history';
import { Schedule } from './pages/schedule';
import { Resultmatch } from './pages/resultmatch';
import { Sidebarhamburger } from './components/sidebarhamburger'; // Import komponen baru

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Sidebarhamburger />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/topscore" element={<Topscore />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/result" element={<Resultmatch />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  </StrictMode>,
)
