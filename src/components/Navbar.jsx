import React from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ SidebarToggle, setSidebarToggle }) => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white mr-4 cursor-pointer' onClick={() => setSidebarToggle(!SidebarToggle)} />
        <span className='text-white font-semibold'>EGO-Transfert</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative flex items-center'> {/* Modification ici */}
          <FaSearch className="text-white absolute left-0 ml-3 cursor-pointer md:left-4 md:ml-6 lg:left-6" /> {/* Icône de recherche */}
          <input type="text" className='w-48 md:w-64 lg:w-80 px-4 py-1 pl-10 rounded shadow outline-none text-black' placeholder="Rechercher..." /> {/* Barre de recherche */}
        </div>
        <div className='text-white'>
          <FaBell className='w-7 h-7'/>
        </div>
        <div className='relative'>
          <button className='text-white group'>
            <FaUserCircle className='w-7 h-7 mt-1' /> 
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
              <ul className='py-2 text-sm text-gray-950'>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-200 focus:outline-none">Profile</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-200 focus:outline-none">Setting</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-200 focus:outline-none">Log Out</button></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
