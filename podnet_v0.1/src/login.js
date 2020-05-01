import React from 'react';
import './App.css';
import './Sidebar.css'
import SidebarLoginContent from './sidebarLoginContent.js'

function Login() {
    return (
        <div>
            <div class="sidenav">
                <SidebarLoginContent />
            </div>
            <header className="Background-image-login">
            </header>
        </div>
    );
}

export default Login;