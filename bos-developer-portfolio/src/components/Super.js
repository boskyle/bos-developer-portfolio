import React,{useEffect} from 'react';
import './super.css';
import Nav from './Nav/Nav';
import Parent from './Parent/Parent';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </div>
    );
}

export default Super;



