import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Для пользовательских стилей

const SidebarExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleSidebar}>
        Открыть сайдбар
      </button>

      {isOpen && (
        <div className="backdrop" onClick={closeSidebar}>
          <div className="sidebar">
            <button className="btn-close" onClick={closeSidebar}></button>
            <h2>Сайдбар</h2>
            <p>Содержимое сайдбара</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarExample;
