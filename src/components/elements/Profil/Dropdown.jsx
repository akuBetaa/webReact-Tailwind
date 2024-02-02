import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/';
    }

    return (
        <div>
            <button
                onClick={toggleDropdown}
                className='text-left w-full justify-center rounded-md bg-white px-3 py-2 
                            hover:shadow-sm hover:ring-1 hover:ring-gray-300 hover:bg-gray-50
                             focus:ring-1 focus:ring-gray-300 focus:bg-gray-50'
            >
                {children}
            </button>

            {isOpen && (
                <div className='absolute w-52 mt-14 top-10 right-8 rounded-md bg-white py-2 shadow-lg'>
                    <ul>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profil</li>
                        <Link to={'/dashboard'}>
                         <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Dashboard</li>
                        </Link>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown;