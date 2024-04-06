import React from "react"
import { AiOutlineGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import Cosmic_Catastrophe from "/public/images/cosmic_catastrophe.png";
import Harder_Turrets from "/public/images/harder_turrets.png";
import Infinite_Spray_Cans from "/public/images/infinite_spray_cans.png"
import No_Late_Notification from "/public/images/no_late_notification.png"
import Cheat_Sheet from "/public/images/cheat_sheet.jpeg";
import Website from "/public/images/website.jpeg";

export default function Projects() {
    return (
        <section id='projects' className='max-w-3xl mx-auto px-8 py-8'>
            <h2 className='mb-8 font-medium text-xl'>projects</h2>
            <div className='flex flex-wrap justify-center gap-4'>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <img src={Infinite_Spray_Cans} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>infinite spray cans</h3>
                        <p>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/' target='_blank'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/InfiniteSprayCans' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <img src={Website} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>portfolio website</h3>
                        <p>A personal website to display my projects & portfolio work.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='#home'><GoLinkExternal /></a>
                    <a href='https://github.com/twoandtwelve/twoandtwelve.github.io' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>   
                    <img src={Harder_Turrets} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>harder turrets</h3>    
                        <p>A Lethal Company mod that increases the spawnrate & difficulty of turrets.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/' target='_blank'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/HarderTurrets' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <img src={Cosmic_Catastrophe} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>cosmic catastrophe</h3>
                        <p>An escape room-like game developed collaboratively with two other classmates for
                        a course project.</p>
                    </div> 
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/escape-room-game' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <img src={No_Late_Notification} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>no late notification</h3>
                        <p>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/' target='_blank'><GoLinkExternal /></a>
                        <a href='https://github.com/twoandtwelve/NoLateNotification' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
                <article className='flex flex-col max-w-screen-sm sm:max-w-project border border-slate-500 rounded-md bg-white drop-shadow-lg'>
                    <img src={Cheat_Sheet} className='rounded-t-md'/>
                    <div className='p-4 pb-0 grow'>
                        <h3 className='font-semibold text-l'>cheat sheet script</h3>
                        <p>A Python script that generates a cheat sheet containing 
                        in-game item information for Terraria Calamity Mod.</p>
                    </div>
                    <div className='p-4 flex justify-end items-center gap-4 text-2xl'>
                    <a href='https://github.com/twoandtwelve/weapons-cheatsheet' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </article>
            </div>
        </section>
    )   
}