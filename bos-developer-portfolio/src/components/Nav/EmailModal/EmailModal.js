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
      console.log('submit');
    }

    

  


   
    return<Modal isOpen={isOpen} className="container-email-form" overlayClassName="lg-overlay" ariaHideApp={false} onRequestClose={EmailModalExit}> 

    <div className="form-wrapper">
    <h2 className="">send me an email.</h2>
    <small onClick={EmailModalExit}>exit</small>

    <form className="email-form w-100 h-100 p-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-item d-flex flex-column">
            <div className="form-group">
            <label htmlFor="sender-email">Your Email</label>
            <input className="form-control" placeholder="johnsmith@gmail.com"
            name="email"
            type="email"
            aria-describedby="emailInput"
            ref={register({
                required: {
                    value: true,
                    message: "Email required."
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Not a valid email address.",
                }
              })}
            />
            {errors.email && <span className="form-err">{errors.email.message}</span>}   
            </div>
            <div className="form-group">
            <label htmlFor="sender-email">Subject</label>
            <input className="form-control" placeholder="Inquiry.."/>
            </div>
          
        </div>

<div className="form-item d-flex flex-column"><h4>message <span>{charCounter}/200</span></h4>
        <textarea className="form-control w-100 mt-1 h-50" placeholder="Hello World!"
        onChange={e => setCount(e.target.value.length)}
        name="message"
        type="text"
        ref={register({
            required: {
                value: true,
                message: "Message required."
            },
          maxLength: 200
        })}
        />
         {errors.message && <span className="form-err">{errors.message.message}</span>}
            <span className="form-err">{errors.message?.type === "maxLength" && "Message too long.."}</span>
          <button type="submit" className="mt-5">SEND</button>
        </div>

    </form>
    </div>
    
    </Modal>
}

export default EmailModal;