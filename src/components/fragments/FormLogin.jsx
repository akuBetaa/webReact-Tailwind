import React from 'react'
import InputForm from '../elements/input';
import Button from '../elements/Button';

const FormLogin = () => {
    const handleLogin = () => {
        console.log('login');
    }
    
    return (
        <form action="">
            <InputForm
                name="email"
                type="email"
                placeholder="example@gmail.com"
                style="bg-[#EDF1FF] placeholder:text-primary">
                Email/ Username
            </InputForm>

            <InputForm
                name="password"
                type="password"
                placeholder="*******"
                style="bg-[#EDF1FF] placeholder:text-primary box-decoration-none">
                Password
            </InputForm>

            <Button style="w-full" onClick={handleLogin}></Button>
        </form>
    )
}

export default FormLogin