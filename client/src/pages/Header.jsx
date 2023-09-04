import React from 'react'
import HeaderLinks from '../components/HeaderLinks'

export default function Header(){
    return (
        <header 
          className=
          ' z-[2] bg-[#fefefe] drop-shadow-lg flex justify-between items-center p-2 sticky top-0 text-orange-400'
        >
            <div>Logo</div>
            <HeaderLinks />
        </header>
    )
}