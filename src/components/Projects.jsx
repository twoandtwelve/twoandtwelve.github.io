import React from "react"

import harderturrets from '../images/harderturrets.png'

export default function Projects() {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div>
                <article>
                    <div>
                        <img src={harderturrets}/>
                    </div>
                    <h3>HarderTurrets</h3>
                    <p>A Lethal Company mod that increases the spawnrate & difficulty of turrets. These settings can be configured by the player to their liking.</p>
                    <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Mod Page</a>
                    <a href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
                <article>
                    <div>
                        <img src={harderturrets}/>
                    </div>
                    <h3>InfiniteSprayCans</h3>
                    <p>A Lethal Company mod that allows infinite use of the spray paint can item.</p>
                    <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a href='https://thunderstore.io/c/lethal-company/p/jacky/InfiniteSprayCans/'>Mod Page</a>
                    <a href='https://github.com/twoandtwelve/InfiniteSprayCans'>Github</a>
                </article>
                <article>
                    <div>
                        <img src={harderturrets}/>
                    </div>
                    <h3>NoLateNotification</h3>
                    <p>A Lethal Company mod that removes the alert that pops up when it gets late in-game.</p>
                    <p>C#, BepInEx, Harmony, ILSpy, .NET Framework</p>
                    <a href='https://thunderstore.io/c/lethal-company/p/jacky/NoLateNotification/'>Mod Page</a>
                    <a href='https://github.com/twoandtwelve/NoLateNotification'>Github</a>
                </article>
                <article>
                    <div>
                        <img src={harderturrets}/>
                    </div>
                    <h3>COSMIC CATASTROPHE</h3>
                    <p></p>
                    <p>Java, JavaFX, OpenAI, Maven</p>
                    <a href='https://github.com/twoandtwelve/escape-room-game'>Github</a>
                </article>
                <article>
                    <div>
                        <img src={harderturrets}/>
                    </div>
                    <h3>Terraria Cheat Sheet Script</h3>
                    <p></p>
                    <p>Python, BeautifulSoup4, gspread, Google Sheets API</p>
                    <a href='https://github.com/twoandtwelve/weapons-cheatsheet'>Github</a>
                </article>
            </div>
        </section>
    )   
}