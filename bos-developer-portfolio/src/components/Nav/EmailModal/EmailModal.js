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
        <div className="form-item d-flex flex-column">
            <div className="form-group">
            <label htmlFor="sender-email">Your Email</label>
            <input className="form-control" placeholder="johnsmith@gmail.com"/>
            </div>
            <div className="form-group">
            <label htmlFor="sender-email">Subject</label>
            <input className="form-control" placeholder="Inquiry.."/>
            </div>
            <button  className="btn w-50 mx-auto mt-5">Push</button>
        </div>

        <div className="form-item d-flex flex-column"><h4>message</h4></div>

    </form>
    </div>
    
    </Modal>
}

export default EmailModal;