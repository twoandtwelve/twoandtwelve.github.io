import React from "react"
import { Link } from "react-scroll";
import { GoDownload } from "react-icons/go";
import CV from "/public/files/jackykim_cv.pdf"


export default function Nav() {
    return (
        <nav id='home' className='max-w-3xl mx-auto px-8 py-16'>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-between sm:items-center'>
                <div className="flex gap-4">
                    <Link to='home' smooth duration={500} className='cursor-pointer'>home</Link>
                    <Link to='projects' smooth duration={500} className='cursor-pointer'>projects</Link>
                    <Link to='about' smooth duration={500} className='cursor-pointer'>about me</Link>
                </div>
                <div className="flex gap-4">
                    <a href={CV} download="jackykim_cv.pdf" target="_blank" className ='flex items-center gap-1'>resume<GoDownload/></a>
                    <a href='https://github.com/twoandtwelve' target="_blank" >github</a>
                    <a href='https://www.linkedin.com/in/jacky-kim-21b154263/' target="_blank">linkedIn</a>
                </div>
            </div>
        </nav>
    )   
}