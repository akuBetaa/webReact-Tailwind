import React, { useState } from 'react'
import InputForm from '../elements/input';
import Button from '../elements/Button';

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase/firebase';

const FormRegister = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value);
        console.log("Register Berhasil")
    }

    // const [error, setError] = useState(false);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleRegister = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password);
    //         navigate("/login");
    //         console.log("berhasil");
    //     } catch (error) {
    //         console.error(error);
    //     }

    //     // createUserWithEmailAndPassword(auth, email, password)
    //     //     .then((userCredential) => {
    //     //         // Signed in 
    //     //         const user = userCredential.user;
    //     //         console.log(user);
    //     //     })
    //     //     .catch((error) => {
    //     //         setError(true);
    //     //     });
    // }

    return (
        <form>
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
                style="bg-[#EDF1FF] placeholder:text-primary"
                onChange={(e) => setEmail(e.target.value)}>
                Email/ Username
            </InputForm>

            <InputForm
                name="password"
                type="password"
                placeholder="*******"
                style="bg-[#EDF1FF] placeholder:text-primary box-decoration-none"
                onChange={(e) => setPassword(e.target.value)}>
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

            <Button style="w-full" type="submit" onCLick={handleRegister}>Register</Button>

            {error && <p className="pt-3 text-red-500 text-sm justify-center flex">Email dan Password Belum di Masukkan</p>}
        </form>
    )
}

export default FormRegister