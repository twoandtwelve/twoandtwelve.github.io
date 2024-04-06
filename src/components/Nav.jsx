import React, { useState } from "react";
import { Link } from "react-scroll";
import { GoDownload } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import CV from "/public/files/jackykim_cv.pdf"


export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <nav id='home' className='max-w-3xl mx-auto px-8 pt-16 pb-8'>
            <div className='flex flex-row gap-2 justify-between'>
                <div className="flex gap-4">
                    <Link to='home' smooth duration={500} className='cursor-pointer'>home</Link>
                    <Link to='projects' smooth duration={500} className='cursor-pointer'>projects</Link>
                    <Link to='about' smooth duration={500} className='cursor-pointer'>about me</Link>
                    <Link to='contact' smooth duration={500} className='cursor-pointer hidden sm:block'>contact</Link>
                </div>
                <div className="gap-4 hidden sm:flex">
                    <a href={CV} download="jackykim_cv.pdf" target="_blank" className ='flex items-center gap-1'>resume<GoDownload/></a>
                    <a href='https://github.com/twoandtwelve' target="_blank" >github</a>
                    <a href='https://www.linkedin.com/in/jacky-kim-21b154263/' target="_blank">linkedIn</a>
                </div>
                <div className='flex flex-col sm:hidden'> 
                    <button className='flex justify-end mt-1' onClick={() => setOpen(!open)}>
                        <CiMenuBurger className='text-lg'/>
                    </button>
                    {open && (
                        <div className='flex flex-col items-end p-2 gap-2'>
                            <a href={CV} download="jackykim_cv.pdf" target="_blank" className ='flex items-center gap-1'><GoDownload/>resume</a>
                            <a href='https://github.com/twoandtwelve' target="_blank" >github</a>
                            <a href='https://www.linkedin.com/in/jacky-kim-21b154263/' target="_blank">linkedIn</a>
                        </div>)}
                </div>
            </div>
        </nav>
    )   
}