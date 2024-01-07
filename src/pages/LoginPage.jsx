import React from 'react';
import AuthLayouts from '../components/layouts/AuthLayouts';
import FormLogin from '../components/fragments/formLogin';

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin></FormLogin>
        </AuthLayouts>
    )
}

export default LoginPage