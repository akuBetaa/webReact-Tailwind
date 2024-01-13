import React from 'react'
import InputForm from '../elements/input';
import Button from '../elements/Button';

const FormRegister = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value);
        console.log("Register Berhasil")
    }

    return (
        <form onSubmit={handleRegister}>
            <InputForm
                name="fullname"
                type="text"
                placeholder="fullname"
                style="bg-[#EDF1FF] placeholder:text-primary">
                Full Name
            </InputForm>
 
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

            <InputForm
                name="confPassword"
                type="password"
                placeholder="*******"
                style="bg-[#EDF1FF] placeholder:text-primary box-decoration-none">
                Confirm Password
            </InputForm>

            <InputForm
                name="role"
                type="text"
                placeholder="admin/user"
                style="bg-[#EDF1FF] placeholder:text-primary box-decoration-none">
                Role
            </InputForm>

            <Button style="w-full" type="submit">Register</Button>
        </form>
    )
}

export default FormRegister