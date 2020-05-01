import React from 'react';
import './Sidebar.css'
import SidebarSignUpContent from './sidebarSignUpContent.js'

function SignUp() {
    return (
        <div>
        <div class="sidenav">
            <SidebarSignUpContent/>
        </div>
        <header className="Background-image-signup"></header>
        </div>
    )
}

export default SignUp;