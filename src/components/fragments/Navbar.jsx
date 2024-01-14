import React, { useState } from 'react'
import Logo from '../../assets/logo-tb.png';
import Profil from '../elements/Profil';
import { FiMenu, FiChevronDown, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Button from '../elements/Button';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const navLink = [
        {
            label: "Beranda",
            path: "/",
        },
        {
            label: "Blog",
            path: "/blog",
        },
        {
            label: "Forum",
            path: "/forum",
        },
    ]

    return (
        <main className='w-full'>
            <nav className='flex justify-around px-5 py-4 items-center'>
                <section>
                    {/* image logo  */}
                    <Link to={"/"}>
                        <img src={Logo} alt="logo-pejuangtb" className='w-40 h-max' />
                    </Link>
                </section>

                <div>
                    <ul className='hidden md:flex md:justify-center gap-8'>
                        {navLink.map((navlink, i) => (
                            <li key={i} className='text-lg font-semibold pb-2 hover:border hover:border-transparent hover:border-b-primary'>
                                <Link to={navlink.path}>{navlink.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <section className='flex gap-4 items-center'>
                    {/* avatar image */}
                    {/* <Profil /> */}
                    <div className='flex gap-1 items-center'>
                        <img src="/src/assets/images/article-1.jpg" className="rounded-full w-10 h-10" alt="" />
                        <FiChevronDown className='text-xl' />
                    </div>

                    <Link to={"/login"}>
                        <Button style="hidden md:block">Masuk</Button>
                    </Link>

                    {/* icons menu  */}
                    <FiMenu className='text-3xl cursor-pointer md:hidden' onClick={toggleMenu} />
                </section>

                {/* show toggle mobile menu  */}
                {showMenu && (
                    <div className='fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0'>
                        <section className='bg-white text-textblack flex flex-col absolute top-0 right-0 h-screen w-3/5 p-8 gap-8 z-50'>
                            <FiX className='text-3xl cursor-pointer' onClick={() => setShowMenu(false)} />

                            <div className='flex justify-around gap-4'>
                                <Link to={"/login"}>
                                    <Button>Masuk</Button>
                                </Link>

                                <Link to={"/register"}>
                                    <Button>Daftar</Button>
                                </Link>
                            </div>

                            {navLink.map((navlink, i) => (
                                <Link key={i} to={navlink.path} className='font-semibold text-textblack hover:text-textgrey'>
                                    {navlink.label}
                                </Link>
                            ))}
                        </section>
                    </div>
                )}
            </nav>
            <hr />
        </main>
    )
}

// const Nav = ( { type } ) => {
//     if (type === "admin") {
//         return <h1 className="text-white text-2xl font-bold">Dashboard</h1>
//     } else {
//         return <h1 className="text-white text-2xl font-bold">Navbar</h1>
//     }
// }

export default Navbar