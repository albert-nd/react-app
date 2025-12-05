import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import OrderFood from './components/Pages/OrderFood';
import Help from './components/Pages/Help';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-[1640px] min-w-[10px] mx-auto">
      
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between bg-black/85 text-white p-2">
        
        {/* LEFT SIDE - LOGO */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Best<span className="font-bold text-orange-500">Eats</span>
          </h1>
        </div>

        {/* MIDDLE - NAV LINKS */}
        <nav className="hidden lg:flex text-gray-300">
          <Link to="/" className="font-bold mr-8 p-1 hover:text-white rounded-full hover:border-[1px] hover:border-white focus:border-orange-500 focus:text-orange-500 focus:text-xl duration-300">Home</Link>
          <Link to="/OrderFood" className="font-bold mr-8 p-1 hover:text-white rounded-full hover:border-[1px] hover:border-white focus:border-orange-500 focus:text-orange-500 focus:text-xl duration-300">Place your order</Link>
          <Link to="/Help" className="font-bold mr-8 p-1 hover:text-white rounded-full hover:border-[1px] hover:border-white focus:border-orange-500 focus:text-orange-500 focus:text-xl duration-300">Help</Link>
        </nav>

        {/* DELIVERY / PICKUP BUTTONS */}
        <div className="hidden lg:flex bg-gray-200 rounded-full gap-2 items-center ml-2 p-1 text-[14px]">
          <button
            onClick={() => alert("Delivery will be made soon, thank you.")}
            className="bg-gray-400 text-black rounded-full px-4 py-2 font-bold duration-300 border-orange-400 border-2 hover:border-[3px] hover:bg-white hover:text-orange-800 focus:bg-orange-400 focus:text-white"
          >
            Delivery
          </button>
          <button
            onClick={() => alert("Your food is ready for pick up, Thank you.")}
            className="px-4 py-2 rounded-full bg-gray-400 text-black font-bold duration-300 border-orange-400 border-2 hover:border-[3px] hover:bg-white hover:text-orange-800 focus:bg-orange-400 focus:text-white"
          >
            Pickup
          </button>
        </div>

        {/* HAMBURGER MENU ICON */}
        <div className="lg:hidden flex items-center ">
          <button className='border-1 border-black/5'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU WITH SLIDE-IN/OUT ANIMATION */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 text-white flex flex-col items-center space-y-6 p-6 lg:hidden transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          onClick={() => setIsMenuOpen(false)}
          to="/"
          className="text-lg font-bold hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsMenuOpen(false)}
          to="/OrderFood"
          className="text-lg font-bold hover:text-orange-500"
        >
          Order Foods
        </Link>
        <Link
          onClick={() => setIsMenuOpen(false)}
          to="/Help"
          className="text-lg font-bold hover:text-orange-500"
        >
          Help
        </Link>
        <div className="flex space-x-4">
          <button
            onClick={() => { alert("Delivery will be made soon, thank you."); setIsMenuOpen(false); }}
            className="bg-gray-400 text-black rounded-full px-4 py-2 font-bold hover:bg-white hover:text-orange-800"
          >
            Delivery
          </button>
          <button
            onClick={() => { alert("Your food is ready for pick up, Thank you."); setIsMenuOpen(false); }}
            className="bg-gray-400 text-black rounded-full px-4 py-2 font-bold hover:bg-white hover:text-orange-800"
          >
            Pickup
          </button>
        </div>
      </div>

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderFood" element={<OrderFood />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
      <div className='max-w-[1640px] min-w-[10px] mx-auto h-auto bg-gradient-to-bl from-cyan-300/70 to-yellow-500/70'>
      </div>
    </div>
  );
}

export default App;

