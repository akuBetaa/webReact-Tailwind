import React from 'react'
import AuthLayouts from '../components/layouts/AuthLayouts'
import FormRegister from '../components/fragments/FormRegister'

const RegisterPage = () => {
    return (
        <AuthLayouts title="Signup" type="signup">
            <FormRegister></FormRegister>
        </AuthLayouts>
    )
}

export default RegisterPage