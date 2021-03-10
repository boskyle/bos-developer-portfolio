import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './email-modal.css';


const EmailModal = ({isOpen,setIsOpen}) => {


    const EmailModalExit= () => {
        setIsOpen(false);
    }

  


    console.log(isOpen);
    return<Modal isOpen={isOpen} className="container-email-form" overlayClassName="lg-overlay" ariaHideApp={false} onRequestClose={EmailModalExit}> 

    <div className="form-wrapper">
    <h2 className="mt-2">send me an email.</h2>
    <small onClick={EmailModalExit}>exit</small>
    <form className="email-form w-100 h-100"novalidate>




    </form>
    </div>
    
    </Modal>
}

export default EmailModal;