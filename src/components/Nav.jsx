import React, { useState } from "react";
import { Link } from "react-scroll";
import { GoDownload } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import CV from "/public/files/jackykim_cv.pdf"


export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <nav id='home' className='max-w-3xl mx-auto px-8 py-16'>
            <div className='flex flex-row gap-2 justify-between items-center'>
                <div className="flex gap-4">
                    <Link to='home' smooth duration={500} className='cursor-pointer'>home</Link>
                    <Link to='projects' smooth duration={500} className='cursor-pointer'>projects</Link>
                    <Link to='about' smooth duration={500} className='cursor-pointer'>about me</Link>
                </div>
                <div className="gap-4 hidden sm:flex">
                    <a href={CV} download="jackykim_cv.pdf" target="_blank" className ='flex items-center gap-1'>resume<GoDownload/></a>
                    <a href='https://github.com/twoandtwelve' target="_blank" >github</a>
                    <a href='https://www.linkedin.com/in/jacky-kim-21b154263/' target="_blank">linkedIn</a>
                </div>
                <button className="flex sm:hidden" onClick={() => setOpen(!open)}>
                    <CiMenuBurger />
                </button>
            </div>
        </nav>
    )   
}