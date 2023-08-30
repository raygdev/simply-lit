import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import coverImg from '../assets/cover.png'

export default function Header(){
    return (
        <header>
            <Link to='/'><img src ={coverImg} /></Link>

            <nav className="nav-container">
                
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/login'>Login</NavLink>


            </nav>
        </header>
    )
}