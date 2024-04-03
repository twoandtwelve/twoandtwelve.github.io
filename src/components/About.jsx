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
            <div className='pb-24'>
                <h2 className='mb-8 font-medium text-xl'>my tech stack</h2>
                <div className='flex flex-col'>
                    <div className='flex gap-2 flex-col sm:flex-row mb-6'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-1 justify-center items-center aspect-square w-24 text-white bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-4xl'><FaJava/></p>
                                <p className='text-base'>Java</p>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center aspect-square w-24 text-white bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-4xl'><FaPython/></p>
                                <p className='text-base'>Python</p>
                            </div>
                            <div className='flex justify-center items-center aspect-square w-24 text-white bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-5xl'><TbBrandCSharp/></p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-1 justify-center items-center aspect-square w-24 text-white bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-4xl'><FaHtml5/></p>
                                <p className='text-base'>HTML</p>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center aspect-square w-24 text-white bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-4xl'><FaCss3Alt/></p>
                                <p className='text-base'>CSS</p>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center aspect-square w-24 text-white  bg-cyan-900 hover:bg-slate-200 hover:text-cyan-900 ease-in-out duration-200'>
                                <p className='text-4xl'><IoLogoJavascript/></p>
                                <p className='text-base'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        I have experience in <strong>Java</strong> and <strong>C</strong>, both of which I have learnt in my
                        university courses and built many course projects with.
                        Currently learning <strong>SQL</strong> and database systems as part of my penultimate year courses.
                        <br/>
                        <br/>
                        Outside of university, I like to use <strong>Python</strong> and <strong>C#</strong> to build personal projects.
                        I have an interest in reverse engineering and am familiar with decompiler software such as <strong>ILSpy</strong>, hence my passion for video game mod development. 
                        For Front-End development, I enjoy using <strong>React</strong> and <strong>JavaScript</strong>.
                        <br />
                        <br />
                        <br />
                        Other technologies: Git, JavaFX, MATLAB, RStudio, Ubuntu
                    </p>
                </div>
            </div>
            <div className='pb-24'>
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