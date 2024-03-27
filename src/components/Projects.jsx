import React from "react"
import { AiOutlineGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

import test from '/public/images/test.png'

export default function Projects() {
    return (
        <section id='projects' className='max-w-3xl mx-auto px-8 py-6'>
            <h2 className='mb-10 font-medium text-xl'>projects</h2>
            <div className='flex flex-wrap justify-center gap-4'>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>harder turrets</h3>    
                        <p>A Lethal Company mod that increases the spawnrate & difficulty of turrets.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/HarderTurrets'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>portfolio website</h3>
                        <p>A personal website to display my projects & portfolio work.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='#home'><GoLinkExternal /></a>
                    <a href='https://github.com/twoandtwelve/twoandtwelve.github.io'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>infinite spray cans</h3>
                        <p>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/InfiniteSprayCans'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>no late notification</h3>
                        <p>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/NoLateNotification'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>cosmic catastrophe</h3>
                        <p>An escape room-like game developed collaboratively with two other classmates for
                        a course project.</p>
                    </div> 
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/escape-room-game'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>cheat sheet script</h3>
                        <p>A python script that generates a cheat sheet containing useful 
                        in-game information for Terraria Calamity Mod.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/weapons-cheatsheet'><AiOutlineGithub /></a>
                    </div>
                </article>
            </div>
        </section>
    )   
}