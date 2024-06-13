// Sidebar.js
import React, { useState } from 'react';
import { FaHome, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import egoLogo from '../images/ego.jpg';

const Sidebar = ({ SidebarToggle }) => {
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);

  const toggleUsersDropdown = () => {
    setShowUsersDropdown(!showUsersDropdown);
  };

  return (
    <div className={`${SidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2 rounded-lg shadow-lg`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
      </div>
      <div className="flex items-center justify-center">
        <img src={egoLogo} alt="EGO Logo" className="h-10 w-10 rounded-full mr-2 transform rotate-180" />
        <span className='text-white text-2xl font-bold'>EGO-Transfert</span>
      </div>
      <hr className="border-white mt-4 mb-4" />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded-lg hover:shadow-md hover:bg-blue-500 py-2'>
          <a href="/" className='px-3 flex items-center'>
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-1" />
            Home
          </a>
        </li>
        <li className='mb-2 rounded-lg hover:shadow-md hover:bg-blue-500 py-2 relative'>
          <a href="#" className='px-3 flex items-center' onClick={toggleUsersDropdown}>
            <FaUsers className="inline-block w-6 h-6 mr-2 -mt-1" />
            Users
            <span className="ml-auto">
              {showUsersDropdown ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </span>
          </a>
          {showUsersDropdown && (
            <ul className="absolute left-14 top-full bg-gray-700 w-48 rounded-lg shadow-md py-1 mt-1">
              <li className="px-3 py-1 hover:bg-gray-600"><a href="/user-form">Création des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="/user-list">Listes des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Génération d'identifiant des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Filtre des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Classement par rôle des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Gestion des rôles et permissions</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Gestion des états des Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Historique des actions de chaque Users</a></li>
              <li className="px-3 py-1 hover:bg-gray-600"><a href="#">Édition des infos de chaques Users</a></li>
            </ul>
          )}
        </li>
        <li className='mb-2 rounded-lg hover:shadow-md hover:bg-blue-500 py-2'>
          <a href="" className='px-3 flex items-center'>
            <FaChartBar className="inline-block w-6 h-6 mr-2 -mt-1" />
            Rapport
          </a>
        </li>
        <li className='mb-2 rounded-lg hover:shadow-md hover:bg-blue-500 py-2'>
          <a href="" className='px-3 flex items-center'>
            <FaCog className="inline-block w-6 h-6 mr-2 -mt-1" />
            Setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
