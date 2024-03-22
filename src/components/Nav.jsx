import React from "react"
import { GoDownload } from "react-icons/go";


export default function Nav() {
    return (
        <nav id='home' className='max-w-3xl mx-auto px-8 py-16'>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-between sm:items-center'>
                <div className="flex gap-4">
                    <a href='#home'>home</a>
                    <a href='#projects'>projects</a>
                    <a href='#about'>about me</a>
                </div>
                <div className="flex gap-4">
                    <a href="/public/files/jackykim_cv.pdf" download className ='flex items-center gap-1'>resume<GoDownload/></a>
                    <a href='https://github.com/twoandtwelve'>github</a>
                    <a href='https://www.linkedin.com/in/jacky-kim-21b154263/'>linkedIn</a>
                </div>
            </div>
        </nav>
    )   
}