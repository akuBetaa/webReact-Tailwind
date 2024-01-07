import React from 'react'
import InputForm from '../elements/input';
import Button from '../elements/Button';

const FormRegister = () => {
  return (
    <form action="">
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

            <Button style="w-full">Register</Button>
        </form>
  )
}

export default FormRegister