import React from "react"
import uoa from "/public/images/uoa.jpg"


export default function About() {
    return (
        <section id='about' className='max-w-3xl mx-auto px-8 py-6'>
            <h2 className='mb-10 font-medium text-xl'>education</h2>
            <div className='flex flex-col sm:flex-row pb-28'>   
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
            <h2 className='mb-10 font-medium text-xl'>interests</h2>
            {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto dolorum accusamus dolorem
                dignissimos ullam enim pariatur sit neque debitis, inventore delectus,
                quam est, praesentium tenetur consequuntur suscipit nulla eaque??</p>*/}
        </section>
    )   
}   