'use client'
import Link from 'next/link'
import './NavBar.scss'
import { usePathname } from "next/navigation";
import Image from 'next/image';
import DarkModeToggle from '../darkMode/DarkModeToggle';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import MenuToClose from '../MenuToClose/MenuToClose';
import { useState } from 'react';

export default function NavBar() {
    //to build links
    const CustomLink = ({ title, href }) => {
        const router = usePathname()
        return (
            <Link href={href}
                className={` link ${router === href ? 'activeLink' : ''} `}
                onClick={() => { setstate(!state) }}>
                {title}
            </Link>
        )
    }
    //to open or close links in screen mobile
    const [state, setstate] = useState(false)

    // to apeare navbar when scroll
    const [visib, setVisib] = useState("fixed");
    window.addEventListener("scroll", function () {
        if (window.scrollY < 50) { setVisib("fixed"); }
        else if (window.scrollY > 350) { setVisib("fixed"); }
        else if (window.scrollY > 50) { setVisib("hide"); setstate(false)}
        else { setVisib("hide"); }    
    });

    return (
        <div>
            <div className={`navbar ${visib==="fixed" ? 'fixed' : 'hide'}`}>
                <div className="logo">
                    <Image src="/logo.png" alt="logo" fill />
                </div>
                <div className="links">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/services" title="Services" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/blog" title="Blog" />
                    <CustomLink href="/contact" title="Contact" />
                </div>
                <div className='iconsLinks'>
                    <div className='call'><a href='tel:+2888 654 321'>Call Us 888 654 321 ــ </a></div>
                    <div className='socialMedia'>
                        <FaFacebookF />
                        <BsTwitterX />
                        <IoLogoYoutube />
                    </div>
                    <DarkModeToggle />
                    <MenuToClose state={state} setstate={setstate} />
                </div>
            </div>
            <div className={`linksMobile ${state ? 'open' : 'close'}`}>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/services" title="Services" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/blog" title="Blog" />
                <CustomLink href="/contact" title="Contact" />
            </div>
        </div>
    )

};
