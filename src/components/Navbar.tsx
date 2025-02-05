// import React from 'react';
// import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    return (
        <div className = 'navBar'>
            <div className = 'headshotLogo'><img src="/src/assets/wc-headshot.jpg" width="100" height="100"></img></div>
            <div className = 'externalLinks'><p>LI</p><p>GH</p></div>
            <div className = 'internalLinks'>
            <button>Projects</button>
            <button>Resume</button>
            <button>About Me</button> </div>
        </div>

    )

}