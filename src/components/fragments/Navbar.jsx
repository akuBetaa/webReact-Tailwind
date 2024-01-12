import React from 'react'
import Logo from '../../assets/logo-tb.png';
import Profil from '../elements/Profil';

const Navbar = () => {

    return (
        <nav className="w-full bg-blue-100 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="logo-pejuangtb" className='w-40 h-max' />
                <div>
                    <Profil />
                </div>
                {/* { Nav ( { type: "admin" }	) } */}
            </div>
        </nav>
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