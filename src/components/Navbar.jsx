import { useState } from "react";
import { AiOutlineClose, AiOutlineSearch, AiFillTag  } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { MdFavorite, MdHelp  } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
 

export default function Navbar() {

    const [ nav, setNav ] = useState(false);

    return (
        <div className='max-w-[1640px] min-w-[10px] mx-auto flex justify-between items-center p-4 bg-black'>
            <div className='flex items-center '>
                <div onClick={() => setNav(!nav)} 
                className='cursor-pointer bg-black'>
                    <GiHamburgerMenu size={50} className="text-white" />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-blue-900 mx-3 font-bold'>
                    SHE<span className='font-bold text-white'>RIF</span>
                </h1>

                <div className='hidden lg:flex bg-gray-200 rounded-full items-center p-1 text-[14px]'>
                    <p className='bg-blue-900 text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* search button */}
            <div className='bg-gray-200 rounded-full flex items-center w-[200px] px-2 sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent w-full focus:outline-none p-2 rounded-full' 
                type="text" 
                placeholder='Search product' />
            </div>

            {/* cartbutton */}
            <button className="bg-white text-black font-bold hidden md:flex item-center p-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2 text-black" />
                cart
            </button>

            {/* Mobile Menu */}
            {/* overlay */}

            {/* the hoock(useState) */}
            {/* tenary operators */}
            
            {nav ? <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>: ''}
            {/* tenary operators */}

            {/* slide drawer */}
            <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500' }>
            <AiOutlineClose size={30} onClick={() => setNav(!nav)} className="absolute right-4 top-6 cursor-pointer text-white" />
                <h2 className="text-2xl text-gray-500">
                    She<span className='font-bold text-white'>rif</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-6 text-gray-800">
                        <li className="text-xl py-4 flex item-center text-white"><TbTruckDelivery className="mr-4"/>Orders</li>
                        <li className="text-xl py-4 flex item-center text-white"><MdFavorite className="mr-4"/>Favorites</li>
                        <li className="text-xl py-4 flex item-center text-white"><FaWallet className="mr-4"/>Wallet</li>
                        <li className="text-xl py-4 flex item-center text-white"><MdHelp className="mr-4"/>Help</li>
                        <li className="text-xl py-4 flex item-center text-white"><AiFillTag className="mr-4"/>Promotion</li>
                        <li className="text-xl py-4 flex item-center text-white"><BsFillSaveFill className="mr-4"/>Best One</li>
                        <li className="text-xl py-4 flex item-center text-white"><FaUserFriends className="mr-4"/>Invite Friends</li>
                    </ul>
                </nav>
            </div>
            {/* slide drawer */}

            
        </div>

    )
}

// export default Navbar;
