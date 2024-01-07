import React from 'react'
import { Link } from 'react-router-dom';

import Playstore from '/src/assets/icons/playstore.svg'
import Button from '../elements/Button';

import LogoTB from '/src/assets/logo-tb.png';

const AuthLayouts = (props) => {
    const { children, title, type } = props;

    return (
        <div className='flex min-h-screen w-full '>
            {/* gambar disamping*/}
            {/* <div className='bg-primary w-2/4 hidden sm:block'></div> */}

            {/* konten form  */}
            <div className='max-w-xs flex flex-col mx-auto place-content-center '>
                <img src={LogoTB} className="w-3/4 my-4 mx-auto" alt="" />
                <p className='text-sm mb-1'>
                    {type === "login"
                        ? "Masuk jadi bagian PEJUANGTB 👋"
                        : "Bergabung jadi bagian PEJUANGTB 👋"
                    }
                </p>
                <h3 className='text-2xl font-extrabold mb-3'>{title} to your account</h3>

                {children}

                <div className='flex justify-center mt-4'>
                    <p className='content-center text-textgrey text-xs self-center'>
                        {/* CONDITIONAL RENDERING || OPERATOR TERNARY  */}
                        {type === 'login'
                            ? "Don’t  have an account?"
                            : "I have account?"}
                    </p>

                    {/* CONTIONAL RENDERING WITH LOGICAL && OPERATOR  */}
                    {type == "login" && (
                        <Link to="/register">
                            <Button variant="bg-transparant text-primary hover:bg-transparant" style="text-sm font-semibold hover:text-textgrey">Signup</Button>
                        </Link>
                    )}

                    {type == "signup" && (
                        <Link to="/login">
                            <Button variant="bg-transparant text-primary hover:bg-transparant" style="text-sm font-semibold hover:text-textgrey">Login</Button>
                        </Link>
                    )}
                </div>

                <p className='text-center text-textgrey text-sm'>Or</p>

                <div className='flex justify-between'>
                    <p className='text-sm text-textgrey'>Dapatkan Aplikasi <br /> di Play Store</p>
                    <img src={Playstore} className="w-2/5" alt="" />
                </div>
            </div>
        </div>
    )
}


export default AuthLayouts;