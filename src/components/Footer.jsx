import React from "react"
import { Link } from "react-scroll";
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='py-24'>
            <div className='mx-auto max-w-3xl px-8 flex justify-between'>
                <small className='flex items-center gap-1'><FaRegCopyright classname='text-xl'/>
                 Jacky Kim 2024
                </small>
                <Link to="home" smooth duration={500} className='flex items-center cursor-pointer'>
                    <small>back to top</small>
                </Link>
                <small className='flex items-center'>made using <DiReact className='text-xl'/>
                    <DiJavascript1 className='text-xl'/>
                    <SiTailwindcss className='text-xl'/>
                </small>
            </div>
        </footer>
    )   
}   