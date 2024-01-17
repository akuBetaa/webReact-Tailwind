import React from 'react'
import Dropdown from './Dropdown'
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const email = localStorage.getItem('email');

const Profil = () => {
    return (
        <>
            {email === null ? 
            <Link to={"/login"} className='hidden md:block'><Button /></Link> :
                <Dropdown>
                    <Account />
                </Dropdown>
            }
        </>
    )
}

const Account = () => {
    return (
        <div className='flex items-center gap-2'>
            <img
                className='rounded-full w-10 h-10'
                src="/src/assets/images/article-1.jpg"
                alt="profil"
            />

            <div className='hidden md:block'>
                <h3 className='text-sm font-semibold'>{email}</h3>
                <p className='text-xs'>User</p>
            </div>
            <FiChevronDown className='text-xl md:hidden' />
        </div>
    )
}

export default Profil;