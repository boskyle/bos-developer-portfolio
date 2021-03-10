import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './email-modal.css';


const EmailModal = ({isOpen}) => {
    console.log(isOpen);
    return<Modal isOpen={isOpen} className="container-email-form" overlayClassName="lg-overlay" ariaHideApp={false}> 

    <div className="form-wrapper">
    <h2>Hello</h2>
    </div>
    
    </Modal>
}

export default EmailModal;