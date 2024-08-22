import  { useState } from 'react';
import logo_light from '../../assets/logo.jpg';
import logo_dark from '../../assets/logo.jpg';
import toggle_light from '../../assets/day.png';
import toggle_dark from '../../assets/night.png';
import shopping_cart from '../../assets/shoping-card.png';
import shopping_cart_dark from '../../assets/shoping-card.png';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full p-4 transition duration-500 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="flex items-center justify-around ">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={theme === 'light' ? logo_light : logo_dark}
            alt="Logo"
            className="w-12 cursor-pointer rounded-full ml-[15%] transition-transform duration-500 transform hover:scale-110"
          />
        </div>

        {/* Menu Links */}
        <ul className={`hidden md:flex ml-10 space-x-8 items-center`}>
          <li className="relative group">
            <a
              href="#"
              className="text-lg font-medium transition duration-300 ease-in-out transform hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
            >
              HOME
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-all duration-500"></div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-lg font-medium transition duration-300 ease-in-out transform hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
            >
              SHOP
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-all duration-500"></div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-lg font-medium transition duration-300 ease-in-out transform hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
            >
              SOFTWARES
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-all duration-500"></div>
          </li>
        </ul>

      
        <div className="flex items-center space-x-[30px]">
          <div className="cursor-pointer hidden md:block">
            <img
              src={theme === 'light' ? shopping_cart : shopping_cart_dark}
              alt="Shopping Cart"
              className="w-10 transition-transform duration-500 transform hover:scale-110"
            />
          </div>

      
          <img
            onClick={toggleMode}
            src={theme === 'light' ? toggle_dark : toggle_light}
            alt="Toggle Icon"
            className="w-10 cursor-pointer transition-transform duration-500 transform hover:scale-110"
          />

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none flex flex-col space-y-2"
          >
            <div
              className={`w-8 h-0.5 bg-current transition-transform duration-500 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-current transition-opacity duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-current transition-transform duration-500 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
            ></div>
          </button>
        </div>
      </div>

     
      <div className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col space-y-4 mt-4 border-t border-gray-200 pt-4">
          <li className="text-lg font-medium">
            <a href="#" className="block hover:text-blue-500 dark:hover:text-blue-400 hover:border-l-4 border-blue-500 pl-2 transition-all duration-300 ease-in-out">
              HOME
            </a>
          </li>
          <li className="text-lg font-medium">
            <a href="#" className="block hover:text-blue-500 dark:hover:text-blue-400 hover:border-l-4 border-blue-500 pl-2 transition-all duration-300 ease-in-out">
              SHOP
            </a>
          </li>
          <li className="text-lg font-medium">
            <a href="#" className="block hover:text-blue-500 dark:hover:text-blue-400 hover:border-l-4 border-blue-500 pl-2 transition-all duration-300 ease-in-out">
              SOFTWARES
            </a>
          </li>
          <li className="text-lg font-medium">
            <img
              src={theme === 'light' ? shopping_cart : shopping_cart_dark}
              alt="Shopping Cart"
              className="w-10 mx-auto transition-transform duration-500 transform hover:scale-110"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
