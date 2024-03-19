import React from "react"
import './Projects.css'
import harderturrets from '../images/harderturrets.png'

export default function Projects() {
    return (
        <section id='projects'>
            <h2 className='title'>Projects</h2>
            <div className='projects_container'>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>HarderTurrets</h3>
                    <p className='project_description'>A Lethal Company mod</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Link</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>HarderTurrets</h3>
                    <p className='project_description'>A Lethal Company mod</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Link</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>HarderTurrets</h3>
                    <p className='project_description'>A Lethal Company mod</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Link</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
                <article className='article'>
                    <div>
                        <img className='project_image' src={harderturrets}/>
                    </div>
                    <h3 className='project_title'>HarderTurrets</h3>
                    <p className='project_description'>A Lethal Company mod</p>
                    <a className='project_button' href='https://thunderstore.io/c/lethal-company/p/jacky/HarderTurrets/'>Link</a>
                    <a className='project_button' href='https://github.com/twoandtwelve/HarderTurrets'>Github</a>
                </article>
            </div>
        </section>
    )   
}