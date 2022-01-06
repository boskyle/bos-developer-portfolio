import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import NonExist from './NonExist';



const Parent = () => {
    const location = useLocation();
    const [currentLocation,setLocation] = useState('/');
    useEffect(() => {
        console.log('Parent component mounted.');
      },[])
  
    useEffect(() => {
      return (() => {
        console.log("Parent component unmounted.");
    })
    },[])
  
      useEffect(() => {
          console.log(location.pathname);
          setLocation(location.pathname);
      },[location]) 
      switch (currentLocation) {
        case '/':
                return <Profile/>;
        case '/projects':
                return <Project/>;
        case '/experience':
                return <Experience/>;
        default:
            return <NonExist/>;
         
      }


}


export default Parent;