import React from 'react'

const Button = (props) => {
    const {
        children = "Login",
        variant = "bg-primary text-white hover:bg-textblack",
        style,
        OnClick } = props;

    return (
        <div>
            <button className={`px-6 py-2 ${variant} ${style} rounded-md text-base`}
                                type='button'
                                onClick={ () => OnClick()}>
                {children}
            </button>
        </div>
    )
}

export default Button;