import React from 'react'

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullwidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
            ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red   border-coral-red text-white ${fullwidth && 'w-full'}"}

       
        rounded-full `}>{label}
            {iconURL && <img src={iconURL} alt=""
                className='ml-2  rounded-full w-5 h-5' />
            }

        </button>
    )
}

export default Button