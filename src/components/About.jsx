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
        <section id='about' className='max-w-3xl mx-auto px-8 py-8'>
            <div className='py-4'>
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
                        I have experience in <strong>Java</strong> and <strong>C/C#</strong>, both of which I have learned in my
                        university courses and built many course projects with. Additionally, I have knowledge of <strong>Python</strong>, <strong>SQL</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and front-end libraries like <strong>React</strong>.
                        <br/>
                        <br/>
                        Outside of university, I like to learn new languages, technologies and open-source libraries to build my solutions.
                        Particularly interested in <strong>full-stack development</strong> and <strong>distributed programming</strong>.
                        <br />
                        <br />
                        <br />
                        Other technologies: Git, JavaFX, JPA/Hibernate, .NET Framework, Linux Kernel
                    </p>
                </div>
            </div>
            <div className='py-4'>
                <h2 className='mb-8 font-medium text-xl'>education</h2>
                <div className=' mb-16 flex flex-col sm:flex-row'>   
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
            <div className='py-4'>
                <h2 className='mb-8 font-medium text-xl'>awards & honours</h2>
                <div className='mb-8 items-baseline gap-1'>
                    <small className='italic'>2023</small>
                    <h4 className='font-medium text-xl'>First in Course - SOFTENG 281</h4>
                    <small className='font-normal italic text-sm'>Department of Electrical, Computer, and Software Engineering</small>
                    <p>Recognises students who have obtained the highest overall mark in the taught course.</p>    
                </div>
                <div className='items-baseline gap-1'>
                    <small className='italic'>2022</small>
                    <h4 className='font-medium text-xl'>Dean's Honours List</h4>
                    <small className='font-normal italic text-sm'>Faculty of Engineering</small>
                    <p>Recognises students who have demonstrated excellence in academic performance by being in the top 5% of their year of study.</p>
                </div> 
            </div>                
        </section>
    )   
}   