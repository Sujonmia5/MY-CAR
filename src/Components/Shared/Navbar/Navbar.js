import { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MYCAR from '../../../assets/tavola-spa-cura-della-auto-logo-mycar.png';
import { AuthContext } from "../../../Context/Context";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, LogOut } = useContext(AuthContext)
    const Naviagte = useNavigate()

    const LogoutHandler = () => {
        LogOut()
            .then(() => {
                Naviagte('/login')
            })
            .catch(() => { })
    }

    const menu = <>
        <li><Link to="/home" aria-label="Home" title="Home" className="hover:text-primary font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Home</Link></li>

        {
            user?.uid && <li><Link to="/dashboard" aria-label="Dashboard" title="Dashboard" className="hover:text-primary font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Dashboard</Link></li>
        }
        <li><Link to="/blog" id="Category" aria-label="Category" title="Category" className="hover:text-primary font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"> Blog</Link></li>

        <li><Link to="/about" aria-label="About" title="About" className="hover:text-primary font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">About</Link></li>

        {
            user?.uid ?
                <>
                    <li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="" />
                            </div>
                        </label>
                    </li>
                    <li onClick={LogoutHandler} className="flex flex-row-reverse hover:bg-gray-500 text-gray-900 hover:text-white duration-300 p-2 rounded">
                        <FaSignOutAlt className="text-2xl ml-2" />
                        <button to="" aria-label="LogOut" title="LogOut" className=" font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400">LogOut</button>
                    </li>
                </>
                : <>
                    <li><Link to="/login" aria-label="Login" title="Login" className="hover:text-primary font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Login</Link></li>
                </>
        }
    </>

    return (
        <div>
            <div className="px-4 sticky top-0 z-50 bg-white shadow-xl rounded py-3 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-20">
                <div className="relative lg:mx-20 flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center hover:bg-gray-300 p-2 rounded-md duration-1000"
                    >
                        <img src={MYCAR} className='h-10 -mr-2' alt="" />
                        <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
                            MY CARS
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-5 lg:flex">
                        {menu}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <svg
                                                    className="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Company
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            {menu}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};