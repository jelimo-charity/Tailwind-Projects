import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/logo.jpg';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <nav className='bg-white border-gray-400 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href="#" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} alt="logo" className='h-8'/>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Logo</span>
          </a>
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={showMenu ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${showMenu ? 'block' : 'hidden'} sm:block sm:w-full`} id='navbar-default'>
            <ul className={`font-medium flex flex-col sm:flex-row p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-300 md:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${showMenu ? 'transition-all duration-500 ease-in-out' : ''}`}>
              <li>
                <a href="#" className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-4">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-4">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default App;
