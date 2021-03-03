import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';


const Nav = () => {


    return (<div className="mainContainerItem">

    <div className="computer">
     <h2>boskyle@boskyle-dev-system Bosinux 5.10.15-1-BOS-TERMINAL x86_64 20.2.1</h2>   
     <NavLink to="/"><h3>Profile</h3></NavLink>
     <NavLink to="/projects"><h3>Projects</h3></NavLink>
     <NavLink to="/experience"><h3>Experience</h3></NavLink>
     <div className="computer-contacts">
    <h3>Contact me</h3>
    <span></span>

     </div>
    </div>

    </div>);
}

export default Nav;