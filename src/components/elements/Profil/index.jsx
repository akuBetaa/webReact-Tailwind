import React from 'react'
import Dropdown from './Dropdown'


const Profil = () => {
    return (
        <>
            <Dropdown>
                <Account />
            </Dropdown>
        </>
    )
}

const Account = () => {

    return (
        <div className='flex items-center gap-2'>
            <img
                className='rounded-full w-14 h-14'
                src="/src/assets/images/article-1.jpg"
                alt="profil"
            />

            <div className=''>
                <h3 className='text-base font-semibold'>Beta Nurul Awwalin</h3>
                <p className='text-xs'>User</p>
            </div>
        </div>
    )
}

export default Profil;