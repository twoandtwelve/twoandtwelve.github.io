import React from "react"
import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className='header_container'>
                <h1 className='header_title'>twoandtwelve.github.io</h1>
                <h5 className='header_text'>Hi, I'm <strong>Jacky Kim</strong> - A Software Engineering Student @ UoA</h5>
                <h5 className='header_text'>currently in my penultimate year.</h5>
            </div>
        </header>
    )   
}