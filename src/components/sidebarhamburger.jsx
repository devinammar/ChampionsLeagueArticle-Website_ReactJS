import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import './sidebarhamburger.css';

export const Sidebarhamburger = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {isMobile && (
        <button
          id="buttonforsidebar"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}
      
      {isSidebarVisible && <Sidebar />}
    </div>
  );
};
