'use client'
import Link from 'next/link'
import './NavBar.scss'
import { usePathname } from "next/navigation";
import Image from 'next/image';
import DarkModeToggle from '../darkMode/DarkModeToggle';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

export default function NavBar() {

    const CustomLink = ({ title, href }) => {
        const router = usePathname()
        return (
            <Link href={href}  className={` link ${router === href ? 'activeLink' : ''}`} >
                {title}
            </Link>
        )
    }
    return (
        <div className="container">
            <div className="navbar ">
                <div className="logo">
                    <Image src="/logo.png" alt="logo" fill />
                </div>
                <div className='links'>
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/services" title="Services" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/blog" title="Blog" />
                    <CustomLink href="/contact" title="Contact" />
                </div>
                <div className='iconsLinks'>
                    <div className='clall'>Call Us 888 654 321 ــ </div>
                    <div className='socialMedia'>
                        <FaFacebookF />
                        <BsTwitterX />
                        <IoLogoYoutube />
                    </div>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    )

};
