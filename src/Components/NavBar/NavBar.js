import React from "react";
import './NavBar.css';

const NavBar = ({routeChange,route}) => {
    return(
        <>
    {
        route!=='signIn' && route !== 'register'?
        <div className="topnav">
            <div className="start">
            <p onClick={()=>routeChange('home')}>Home</p>
            <p>About</p>
            </div>
            <div className="start">
            <p onClick={()=>routeChange('signIn')}>Sign out</p>
            </div>
        </div>
        :
        
         <div style={{display:'flex',justifyContent: 'flex-end'}}>
             <p onClick={()=>routeChange('signIn')} className="f4 link dim black underline pa2 pointer">Sign in</p>
             <p onClick={()=>routeChange('register')} className="f4 link dim black underline pa2 pointer">Register</p>
        </div>
    }
    </>
    );
}

export default NavBar;