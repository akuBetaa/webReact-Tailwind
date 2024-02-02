import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../fragments/Sidebar';
import Logo from '../../assets/logo-tb.png';
import Profil from '../elements/Profil';
import { FiMenu } from 'react-icons/fi';

const DashboardLayouts = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // }


  return (
    <div className='min-h-screen w-full'>
      <div className='flex'>
        {/* SIDEBAR  */}
        <div className='w-1/6'>
          <Sidebar />
        </div>

        {/* NAVBAR  */}
        <div className='w-5/6'>
          <div className='flex justify-between px-6 py-4 items-center'>
            <section>
              <h1 className='text-xl font-bold'>Dashboard</h1>
            </section>

            <section className='flex gap-4 items-center'>
              {/* profil */}
              <Profil />
              {/* <FiMenu className='text-3xl cursor-pointer md:hidden' onClick={toggleMenu} /> */}
            </section>
          </div>
          <hr />

          {/* CONTENT  */}
          <div className='p-5'>
            Disini tempat kontennya
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayouts;