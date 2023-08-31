import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import coverImg from '../assets/cover.png'

export default function Header(){
    return (
        <header className="p-4 flex content-center justify-between w-full">
            <div className="w-52">
                <Link to='/'><img src ={coverImg} className="max-w-full" /></Link>
            </div>
            <nav className="nav-container flex gap-5 items-center mr-6">

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/login'>Login</NavLink>


            </nav>
        </header>
    )
}