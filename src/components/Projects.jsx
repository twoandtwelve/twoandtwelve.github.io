import React from "react"
import './Projects.css'
import harderturrets from '../images/harderturrets.png'

export default function Projects() {
    return (
        <section id='projects'>
            <h2 className='section_title'>Projects</h2>
            <div>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>HarderTurrets</h3>
                    <p className='project_description'>A Lethal Company mod that increases the spawnrate & difficulty of turrets. These settings can be configured by the player to their liking.</p>
                    <p className='project_techstack'>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Mod Page</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>InfiniteSprayCans</h3>
                    <p className='project_description'>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                    <p className='project_techstack'>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/'>Mod Page</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/InfiniteSprayCans'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>NoLateNotification</h3>
                    <p className='project_description'>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                    <p className='project_techstack'>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/'>Mod Page</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/NoLateNotification'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>COSMIC CATASTROPHE</h3>
                    <p className='project_description'></p>
                    <p className='project_techstack'>Java, JavaFX, OpenAI, Maven</p>
                    <a className='project_button' href='https://github.com/twoandtwelve/escape-room-game'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>Terraria Cheat Sheet Script</h3>
                    <p className='project_description'></p>
                    <p className='project_techstack'>Python, BeautifulSoup4, gspread, Google Sheets API</p>
                    <a className='project_button' href='https://github.com/twoandtwelve/weapons-cheatsheet'>Github</a>
                </article>
            </div>
        </section>
    )   
}