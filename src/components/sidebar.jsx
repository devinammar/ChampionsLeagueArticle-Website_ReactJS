import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <nav id="sidebar" style={{ display: isSidebarVisible ? 'inline-flex' : 'none' }}>
      <ol id="ol">
        <li id="liicon">
          <button id="buttonsidebar" onClick={toggleSidebar}>
            ☰
          </button>
        </li>
        <li>
          <Link className="sidebartext" to="/">Beranda</Link>
        </li>
        <li>
          <Link className="sidebartext" to="/topscore">Top Skor</Link>
        </li>
        <li>
          <Link className="sidebartext" to="/champions">Daftar Juara</Link>
        </li>
        <li>
          <Link className="sidebartext" to="/schedule">Jadwal</Link>
        </li>
        <li>
          <Link className="sidebartext" to="/result">Hasil Pertandingan</Link>
        </li>
        <li>
          <a className="sidebartext" href="https://gaming.uefa.com/en/uclpredictor" target="_blank" rel="noopener noreferrer">Prediksi</a>
        </li>
        <li>
          <Link className="sidebartext" to="/history">Sejarah</Link>
        </li>
        <li>
          <a className="sidebartext" href="https://share.google/OB5VwjpqOS99YTR6R" target="_blank" rel="noopener noreferrer">Fantasy Football</a>
        </li>
        <li>
          <a className="sidebartext" href="https://clubcompetitions-shop.com/en-int?utm_source=uefa&utm_medium=website&utm_campaign=UCL-store" target="_blank" rel="noopener noreferrer">Toko</a>
        </li>
      </ol>
    </nav>
  );
};
