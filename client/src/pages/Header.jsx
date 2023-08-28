import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <header>
            <Link to="/">This is the header</Link>
        </header>
    )
}