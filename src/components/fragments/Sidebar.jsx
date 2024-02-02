import React from 'react'
import { Link } from 'react-router-dom';
import { FiMenu, FiUsers, FiFolder } from 'react-icons/fi';
import { AiOutlineHome } from "react-icons/ai";
import Logo from '../../assets/logo-tb.png';

const Sidebar = () => {

  const navLink = [
    {
      label: "Dashboard",
      path: "/dashboard",
      image : <AiOutlineHome className='text-xl'/>,
    },
    {
      label: "User",
      path: "/dashboard/user",
      image : <FiUsers className='text-xl' />,
    },
    {
      label: "Post",
      path: "/dashboard/post",
      image : <FiFolder className='text-xl'/>,
    }
  ]

  return (
    <main className="h-screen bg-blue-100">
      <nav className=''>
        <section className='flex justify-center items-center px-3 pt-6'>
          {/* icon menu  */}
          <FiMenu className='text-2xl cursor-pointer ' />

          {/* image logo  */}
          <Link to={"/"}>
            <img src={Logo} alt="logo-pejuangtb" className='w-40 h-max' />
          </Link>
        </section>

        {/* menu sidebar  */}
        <div className='mt-7 py-6'>
          <ul className='flex flex-col gap-3'>
            {navLink.map((navLink, i) => (
              <Link to={navLink.path}>
                <li key={i} className='flex items-center gap-2 text-lg font-medium p-4 pl-6 rounded-md hover:bg-blue-200'>
                  {navLink.image}
                  {navLink.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  )
}

export default Sidebar;