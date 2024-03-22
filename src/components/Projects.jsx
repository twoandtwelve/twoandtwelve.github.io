import React from "react"

import harderturrets from '/public/images/test.png'

export default function Projects() {
    return (
        <section id='projects' className='max-w-3xl mx-auto px-8 py-5 pb-20'>
            <h2 className='mb-10 font-medium text-xl'>projects</h2>
            <div className='flex flex-wrap justify-center gap-8'>
                <article className='flex flex-col max-w-xs border border-gray-400 rounded-md'>
                    <div>
                        <img src={harderturrets} className='rounded-t-md'/>
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-4 font-medium text-xl '>HarderTurrets</h3>
                        <p className='mb-4'>A Lethal Company mod that increases the spawnrate & difficulty of turrets. These settings can be configured by the player to their liking.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Mod Page</a>
                        <a href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-gray-400 rounded-md'>
                    <div>
                        <img src={harderturrets} className='rounded-t-md'/>
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-4 font-medium text-xl'>InfiniteSprayCans</h3>
                        <p className='mb-4'>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/'>Mod Page</a>
                        <a href='https://github.com/twoandtwelve/InfiniteSprayCans'>Github</a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-gray-400 rounded-md'>
                    <div>
                        <img src={harderturrets} className='rounded-t-md'/>
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-4 font-medium text-xl'>NoLateNotification</h3>
                        <p className='mb-4'>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                        <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    </div>
                    <div className='p-4'>
                        <a href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/'>Mod Page</a>
                        <a href='https://github.com/twoandtwelve/NoLateNotification'>Github</a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-gray-400 rounded-md'>
                    <div>
                        <img src={harderturrets} className='rounded-t-md'/>
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-4 font-medium text-xl'>COSMIC CATASTROPHE</h3>
                        <p className='mb-4'></p>
                        <p>Java, JavaFX, OpenAI, Maven</p>
                    </div> 
                    <div className='p-4'>
                    <a href='https://github.com/twoandtwelve/escape-room-game'>Github</a>
                    </div>
                </article>
                <article className='flex flex-col  max-w-80 border border-gray-400 rounded-md'>
                    <div>
                        <img src={harderturrets} className='rounded-t-md'/>
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-4 font-medium text-xl'>Terraria Cheat Sheet Script</h3>
                        <p className='mb-4'></p>
                        <p>Python, BeautifulSoup4, gspread, Google Sheets API</p>
                    </div>
                    <div className='p-4'>
                    <a href='https://github.com/twoandtwelve/weapons-cheatsheet'>Github</a>
                    </div>
                </article>
            </div>
        </section>
    )   
}