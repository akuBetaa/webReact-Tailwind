import React from 'react'

const Button = (props) => {
    const { children = "Login", variant = "bg-primary text-white hover:bg-textblack", style} = props;

    return (
        <div>
            <button className={`px-6 py-2 ${variant} ${style} rounded-md text-base`} type='submit'>
                {children}
            </button>
        </div>
    )
}

export default Button;