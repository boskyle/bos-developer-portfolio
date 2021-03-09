import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';




const Nav = () => {

    const navStyle = {
        textDecoration: 'none',
        display: 'block',
        color: 'green',
        fontFamily: 'terminal',
        fontSize: '1.75em',
        textAlign: 'center',
        marginTop:'0.5em'
    }


    return (<div className="mainContainerItem">

    <div className="computer">
     <h2>boskyle@boskyle-dev-system Bosinux 5.10.15-1-BOS-TERMINAL x86_64 20.2.1</h2>
     <div className="nav-and-contacts">

        <section className="nav-collection">
        <NavLink to="/" exact={true} style={navStyle} classNamme ="nav-link" activeClassName="nav-selected">Profile</NavLink>
        <NavLink to="/projects" style={navStyle} classNamme ="nav-link" activeClassName="nav-selected">Projects</NavLink>
        <NavLink to="/experience"style={navStyle} classNamme ="nav-link" activeClassName="nav-selected">Experience</NavLink>
        </section>   
        <div className="computer-contacts w-100">
        <div className="link-collection">
        <span className="links">email</span>
        <a href="https://www.linkedin.com/in/boskyle" target="_blank"><span className="links">linkedin</span></a> 
        <a href="https://github.com/boskyle" target="_blank"><span className="links">github</span></a> 
        </div>
        </div>
     </div>

    </div>

    </div>);
}

export default Nav;