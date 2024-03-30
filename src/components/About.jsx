import React from "react"
import uoa from "/public/images/uoa.jpg"
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function About() {
    return (
        <section id='about' className='max-w-3xl mx-auto px-8 py-6'>
            <div className='pb-28'>
                <h2 className='mb-8 font-medium text-xl'>my tech stack</h2>
                <div className='flex flex-col'>
                    <div className='flex gap-2 flex-col sm:flex-row mb-6'>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><FaJava/></p>
                            </div>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><TbBrandCSharp/></p>
                            </div>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><FaPython/></p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><FaHtml5/></p>
                            </div>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><FaCss3Alt/></p>
                            </div>
                            <div className='flex justify-center items-center aspect-square w-20 bg-slate-800 text-5xl text-white hover:bg-white hover:text-slate-800 hover:border hover:border-slate-800'>
                                <p><IoLogoJavascript/></p>
                            </div>
                        </div>
                    </div>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quasi
                        hic dolorem eius vel nobis aspernatur dicta ratione! Cum eum dolorem aliquam
                        fugit quibusdam, harum fuga quasi. Enim, obcaecati perspiciatis.
                    </p>
                </div>
            </div>
            <div className='pb-28'>
                <h2 className='mb-8 font-medium text-xl'>education</h2>
                <div className='flex flex-col sm:flex-row'>   
                    <img src={uoa} className='mx-0 max-w-32 max-h-32 mt-2'/>
                    <div className='px-0 sm:px-12 sm:mt-0 mt-4'>
                        <small className='italic'>feb 2022 - nov 2025</small>
                        <div className='mb-6 items-baseline gap-1'>
                            <h4 className='font-medium text-xl'>Bachelor of Engineering (Honours)</h4>
                            <small className='font-normal italic text-sm'>University of Auckland</small>
                        </div>
                        <p className='mb-6'>
                        Specialising in <a href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/software-engineering/undergraduate.html"
                        target="_blank" className='underline'>Software</a> under the department of Electrical, Computer Systems, and Software Engineering (ECSE).
                        </p>
                        <p>Club member: Software Engineering Students Association, Web Development & Consulting Club</p>
                    </div>   
                </div>
            </div>         
        </section>
    )   
}   