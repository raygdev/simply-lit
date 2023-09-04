import React from "react"
import { NavLink } from "react-router-dom"
import { linkOptions } from "./utils/linkOptions"

export default function HeaderLinks() {
  return (
    <nav
      className= 'bg-inherit gap-[20px] flex justify-between items-center p-4 sticky top-0 text-[#e1341e]'
    >
        {
            linkOptions.map((link, i) => {
                let { activeClass, inactiveClass, to, title } = link
                return (
                    <NavLink
                        key={i}
                        to={to}
                        className={({isActive}) => isActive ? activeClass : inactiveClass}
                    >
                      {title}
                    </NavLink>
                )
            })
        }
        
    </nav>
  )
} 
