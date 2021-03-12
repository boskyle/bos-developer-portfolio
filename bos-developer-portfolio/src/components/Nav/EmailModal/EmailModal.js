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
    <h2 className="">send me an email.</h2>
    <small onClick={EmailModalExit}>exit</small>
    <form className="email-form w-100 h-100 p-3"novalidate>
        <div className="form-group">
        <label htmlFor="sender-email">Your Email</label>
        <input className="form-control w-25"/>
        </div>

        <div className="form-group">
        <label htmlFor="sender-email">Subject</label>
        <input className="form-control w-25" placeholder="Application Inquiry.."/>
        </div>



    </form>
    </div>
    
    </Modal>
}

export default EmailModal;