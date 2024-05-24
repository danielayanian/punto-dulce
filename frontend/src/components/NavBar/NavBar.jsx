import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        name: "Home",
        href: "/home",
        

    },
    {
        name: "NotFound",
        href: "*",
    },
    {
        name: "ProductInfo",
        href: "/info",
    }
]



export const NavBar = () => {
  return (
    <div>
        {links.map(x => (
            <Link to={x.href}>{x.name}</Link>
        ))}
    </div>
  )
}
export default NavBar