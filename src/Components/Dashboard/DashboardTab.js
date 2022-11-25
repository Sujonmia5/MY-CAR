import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DashboardTab = () => {
    const [sidebar, setSidebar] = useState(false)

    let activeClassName = "text-gray-900 text-base border-b-2 inline-flex p-4 rounded-t-lg border-b-2 border-primary group"

    return (
        <div className='relative w-96'>
            <button onClick={() => setSidebar(!sidebar)} type="button" class="text-gray-500 md:hidden absolute left-0 z-50 bg-gray-100 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle-navigation">
                <span class="sr-only">Toggle Navigation</span>
                {sidebar ? <svg class="w-5 h-20 text-gray-400" width="16" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" /></svg> : <svg class="w-5 h-20 text-gray-400" width="16" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>}
            </button>
            {/* <!--End Navigation Toggle-- > */}
            <div className={sidebar ? 'transition-all z-50 duration-500 transform     border-b absolute  -left-0 w-60 md:left-28 md:block container mx-auto bg-white mt-5 shadow-lg border-gray-200 dark:border-gray-700 top-10' : 'border-b absolute duration-500  -left-96 md:left-28 md:block container mx-auto bg-white mt-5 shadow border-gray-200 dark:border-gray-700 w-72'}>
                <ul className="-mb-px text-sm font-medium py-5 text-start text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <NavLink to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'text-gray-900 text-base inline-flex p-4 rounded-t-lg hover:border-b-2 group' : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                            }

                        >
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>My orders
                        </NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink to="/dashboard/myProducts" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        }>
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>My Products
                        </NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink to="/dashboard/addProducts" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        }>
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>Add A product
                        </NavLink>
                    </li>

                    <li className="mr-2">
                        <NavLink to="/dashboard/allBuyers" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        }>
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>All Buyers
                        </NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink to="/dashboard/allSeller" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        } aria-current="page">
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>All Sellers
                        </NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink to="/dashboard/allUsers" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        } aria-current="page">
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Users
                        </NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink to="/dashboard/report" className={({ isActive }) =>
                            isActive ? activeClassName : 'text-gray-900 text-base inline-flex p-4 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                        }>
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>Reported Items
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardTab;