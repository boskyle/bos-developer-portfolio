import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './email-modal.css';


const EmailModal = ({isOpen}) => {
    console.log(isOpen);
    return <Modal isOpen={isOpen} overlayClassName="lg-overlay"/>
}

export default EmailModal;