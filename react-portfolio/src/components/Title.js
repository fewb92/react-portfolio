import React from 'react'
import logo from '../assets/images/JPIX Logo.jpg'

export default function Title() {
    return (
        <header>
            <img class="jpix-logo" src={logo} height="150px" alt="JPIX NYC"></img>
            <h1>Welcome to My Portfolio</h1>
        </header>
    )
}
