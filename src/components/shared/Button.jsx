/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Button({ children, className }) {
    return (
        <>

            <button type="button" className={`${className}bg-gradient-to-t to-[#06C532] from-[#029423] p-[10px] rounded-full text-white hover:to-[#206b32c7] hover:from-[#2b6a3ad8] transition-all duration-300`}>{children}</button>

        </>
    )
}
