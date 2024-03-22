import React from "react"
import { AiOutlineGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

import test from '/public/images/test.png'

export default function Projects() {
    return (
        <section id='projects' className='max-w-3xl mx-auto px-8 py-5 pb-28'>
            <h2 className='mb-10 font-medium text-xl'>projects</h2>
            <div className='flex flex-wrap justify-center gap-8'>
                <article className='flex flex-col max-w-xs border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>HarderTurrets</h3>
                        <p className='mb-4'>A Lethal Company mod that increases the spawnrate & difficulty of turrets. These settings can be configured by the player to their liking.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/HarderTurrets'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>Portfolio Website</h3>
                        <p className='mb-4'>A personal website to display my projects & portfolio work.</p>
                        <p>React, Javascript, Tailwind CSS</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='#home'><GoLinkExternal /></a>
                    <a href='https://github.com/twoandtwelve/twoandtwelve.github.io'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-80 border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>InfiniteSprayCans</h3>
                        <p className='mb-4'>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/InfiniteSprayCans'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>NoLateNotification</h3>
                        <p className='mb-4'>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/NoLateNotification'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>COSMIC CATASTROPHE</h3>
                        <p className='mb-4'>An escape room-like game developed collaboratively with two other classmates for
                        a course project.</p>
                        <p>Java, JavaFX, OpenAI, Maven</p>
                    </div> 
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/escape-room-game'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <div>
                        <img src={test} className='rounded-t-md'/>
                    </div>
                    <div className='p-4 grow'>
                        <h3 className='mb-4 font-medium text-xl'>Terraria Cheat Sheet Script</h3>
                        <p className='mb-4'>A python script that generates a cheat sheet containing useful 
                        in-game information for Terraria Calamity Mod.</p>
                        <p>Python, BeautifulSoup4, gspread, Google Sheets API</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/weapons-cheatsheet'><AiOutlineGithub /></a>
                    </div>
                </article>
            </div>
        </section>
    )   
}