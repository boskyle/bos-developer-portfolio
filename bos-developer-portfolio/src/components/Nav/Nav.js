import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';


const Nav = () => {


    return (<div className="mainContainerItem">

    <div className="computer">
     <h2>boskyle@boskyle-dev-system Bosinux 5.10.15-1-BOS-TERMINAL x86_64 20.2.1</h2>
     <div className="nav-and-contacts">

        <section className="nav-collection">
        <NavLink to="/" style={{ textDecoration: 'none' }}><h3>Profile</h3></NavLink>
        <NavLink to="/projects" style={{ textDecoration: 'none' }}><h3>Projects</h3></NavLink>
        <NavLink to="/experience"style={{ textDecoration: 'none' }}><h3>Experience</h3></NavLink>
        </section>   
        <div className="computer-contacts w-100">
        <h4>contact</h4>
        <div className="link-collection">
        <a href="https://www.w3schools.com" target="_blank"><span className="links">linkedin</span></a> 
        <a href="https://www.w3schools.com" target="_blank"><span className="links">github</span></a> 
        </div>
        </div>
     </div>

    </div>

    </div>);
}

export default Nav;