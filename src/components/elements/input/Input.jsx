import React from 'react'

const Input = ( props ) => {
    const { name, type = "text", placeholder, style = "text-slate-700 placeholder:opacity-50" } = props;

    return (
        <div>
            <input 
                type={ type }
                className={`text-sm border rounded-lg w-full py-3 px-5  ${style}`}
                placeholder= { placeholder }
                name={ name }
            />
        </div>
    )
}

export default Input;