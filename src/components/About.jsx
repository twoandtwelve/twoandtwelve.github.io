import React from "react"
import uoa from "/public/images/uoa.jpg"

export default function About() {
    return (
        <section id='about' className='max-w-3xl mx-auto px-8 py-5 pb-52'>
            <h2 className='mb-10 font-medium text-xl'>education</h2>
            <div className='flex flex-col sm:flex-row pb-20'>   
                <img src={uoa} className='mx-0 max-w-32 max-h-32'/>
                <div className='px-0 sm:px-12'>
                    <small className='italic'>feb 2022 - nov 2025</small>
                    <div className='mb-5 items-baseline gap-1'>
                        <h4 className='font-medium text-xl'>Bachelor of Engineering (Honours)</h4>
                        <small className='font-normal italic text-sm'>University of Auckland</small>
                    </div>
                    <p>Specialising in <strong>Software</strong> under the department of Electrical, Computer Systems, and Software Engineering (ECSE).</p>
                </div>   
            </div>
            <h2 className='mb-10 font-medium text-xl'>interests</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto dolorum accusamus dolorem
                dignissimos ullam enim pariatur sit neque debitis, inventore delectus,
                quam est, praesentium tenetur consequuntur suscipit nulla eaque??</p>
        </section>
    )   
}   