import React, { useState } from 'react';

export const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState('Projetos');

  return (
    <div className={`flex flex-col justify-between h-screen bg-white border-r-2 border-blue-800 w-54 px-4 transition-width duration-300 absolute left-0 py-5`}>
      {/* Top Section */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="src/img/logo.jpeg" 
                alt="Logo" 
                className="object-contain max-h-full max-w-full" 
              />
            </div>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col mt-10 space-y-4">
          {['Projetos'].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setSelected(item)}
                className={`flex items-center px-4 py-2 ${selected === item ? 'bg-blue-800 text-white rounded-md' : 'rounded-md text-gray-600 hover:bg-gray-200 hover:text-gray-900'} transition-all duration-300`}
              >
                <span className="mr-4">
                  <i className="bi bi-calendar mr-2"></i>
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start">
        {/* Logout */}
        <div>
          <p className='mb-4'>
            <i className="bi bi-box-arrow-right ml-1 mr-2"></i>
            Logout
          </p>
        </div>

        {/* Admin Info */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className='flex flex-col items-start'>
              <p className="text-gray-900">Administrador</p>
              <p className="text-gray-600 text-sm">administrador@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};
