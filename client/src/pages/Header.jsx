import React from 'react'
import HeaderLinks from '../components/HeaderLinks'
import WhiteLogo from '../assets/White_Logo.png'

export default function Header(){
    return (
        <header 
          className=
          ' z-[2] bg-gradient-to-r from-orange-700 to-amber-500 drop-shadow-lg flex justify-between items-center p-2 sticky top-0 text-orange-400'
        >
            <div className="w-56">
                <img src={WhiteLogo} alt="Simply Lit logo" className="logo-image" />

            </div>
            <HeaderLinks />
        </header>
    )
}