import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [SidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className='flex'>
      <Sidebar SidebarToggle={SidebarToggle} />
      <Dashboard
        SidebarToggle={SidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default App;
