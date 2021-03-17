import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import './email-modal.css';


const EmailModal = ({isOpen,setIsOpen}) => {


    const {register, handleSubmit, errors, reset} = useForm();
    const [charCounter, setCount] = useState(0);

    const EmailModalExit= () => {
        setIsOpen(false);
    }

    const onSubmit = (e) => {
       e.preventDefault();
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
            <button  className="mx-auto mt-5" onClick={onSubmit}>Send</button>
        </div>

<div className="form-item d-flex flex-column"><h4>message <span>{charCounter}/200</span></h4>
        <textarea className="form-control w-100 mt-1 h-50" placeholder="Hello World!"
        onChange={e => setCount(e.target.value.length)}
        />
        
        </div>

    </form>
    </div>
    
    </Modal>
}

export default EmailModal;