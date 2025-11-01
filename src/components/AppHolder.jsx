// import Logo from './midea/Logo';

export default function AppHolder() {
    return (
        <div className="max-w-[1640px] max-auto bg-black m-black p-4 text-white">
{/* navbar */}

            <nav className="flex justify-between item-center">
                <div className="font-bolder">
                    <h2 className="text-lg">ALBERT</h2>
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-300">Work</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
{/* navbar */}
            <div className="my-9">
                <div className="font-bolder p-5 px-5">
                    <h1 className="text-7xl">hi, i am</h1>
                    <h1 className="text-7xl"> robert garcia.</h1>
                    <p className="text-base py-5">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
                    <button className="bg-yellow-300 text-black px-6 py-1 rounded-full font-bolder 
                    hover:bg-gray-950 hover:text-white hover:border hover:border-yellow-300">contact</button>
                </div>
                {/* <img src="{Logo}" alt="Logo"
                className="w-12 h-12 rounded-md mr-4" /> */}
            </div>
{/* header */}            
        </div>
        
    )
}