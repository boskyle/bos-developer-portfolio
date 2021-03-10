import React,{useEffect} from 'react';
import './super.css';
import Nav from './Nav/Nav';
import Parent from './Parent/Parent';
function Super () {





  useEffect(() => {
      console.log('Super component mounted.');
    },[])

  useEffect(() => {
    return (() => {
      console.log("Super component unmounted.");
  })
  },[])


  // modal needs to be here

    return (
        <div className="containerFluid mainContainer">
        <Nav/>
        <Parent/>
        </div>
    );
}

export default Super;



