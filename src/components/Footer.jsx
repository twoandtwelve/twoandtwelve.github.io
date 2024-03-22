import React from "react"
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='py-10 bg-slate-100 border border-slate-200'>
            <div className='mx-auto max-w-3xl flex justify-between'>
                <small className='flex items-center gap-1'><FaRegCopyright classname='text-xl'/>
                Jacky Kim 2024</small>
                <a href="#home">
                    <small>back to top</small>
                </a>
                <small className='flex items-center'>made with <DiReact className='text-xl'/>
                <DiJavascript1 className='text-xl'/>
                <SiTailwindcss className='text-xl'/></small>
            </div>
        </footer>
    )   
}   