import React, { useState } from 'react'
import InputForm from '../elements/input';
import Button from '../elements/Button';

const FormLogin = () => {
    //penggunaan event handler untuk penyimpanan localhost.
    const handleLogin = (event) => {
        //cegah browser memuat ulang saat di klik
        event.preventDefault();

        //menyimpan inputan/data pada localStorage
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);

        //untuk menampilkan inputan pada console
        console.log(event.target.email.value);
        console.log(event.target.password.value);

        console.log('Anda Berhasil Login');

        window.location.href = '/blog';
    }


    return (
        <form onSubmit={handleLogin}>
            <InputForm
                name="email"
                type="email"
                placeholder="example@gmail.com"
                style="bg-[#EDF1FF] placeholder:text-primary"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
            >
                Email/ Username
            </InputForm>

            <InputForm
                name="password"
                type="password"
                placeholder="*******"
                style="bg-[#EDF1FF] placeholder:text-primary box-decoration-none"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
            >
                Password
            </InputForm>

            <Button style="w-full" type="submit"></Button>

            {/* {error && <p className="pt-3 text-red-500 text-sm justify-center flex">Email dan Password Salah</p>} */}
        </form>
    )
}

export default FormLogin;