import React,{ useState } from 'react'
import {Link} from 'gatsby'
import {links} from '../data'
import { Turn as Hamburger } from 'hamburger-react'
import { StaticImage } from "gatsby-plugin-image"
import './Navbar.scss'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='nav'>
            <Link to='/' className='nav__link'>
            <StaticImage className='nav__link__img' src="../images/logo.png" alt="logo" />

            </Link>
         <ul className={isOpen ? 'nav__ul active':'nav__ul'}>
            {links.map((link)=>{
                return <li key={link.name} className='nav__ul__li'><Link className='nav__ul__li__a' to={link.to}>{link.name}</Link></li>
            })}
             </ul>   
             <Hamburger direction="right" distance="sm" color="#666"size={30} toggled={isOpen} toggle={setOpen}/>
        </nav>
    )
}

export default Navbar
