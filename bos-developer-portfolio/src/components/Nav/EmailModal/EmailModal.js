import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import {useForm} from 'react-hook-form';

import './email-modal.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EmailModal = ({isOpen,setIsOpen}) => {


    const {register, handleSubmit, errors} = useForm();
    const [charCounter, setCount] = useState(0);
    const [charCounterFlag,setFlag] = useState(false);
  

    const EmailModalExit= () => {
        setIsOpen(false);
    }

    const onSubmit = async fd => {
  
        let sendEmailUrl = 'http://boskyle.me/php-endpoints/send-email.php';
        console.log(fd);

        await fetch (sendEmailUrl,{
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: fd.email,
            subject: fd.subject,
            message: fd.message
        })
     }).then(response => response.text())
            .then(response => {
                console.log(response);
                    toast.success("I got your message, I'll reach out as soon as I can.");
                    setCount(0);
                    setIsOpen(false);
            })
                .catch(err => console.log(err))

     
    }


    useEffect(() => {
        if (charCounter > 200) {
            setFlag(true);
        } else setFlag (false);
       
    },[charCounter])

  


   
    return<Modal isOpen={isOpen} className="container-email-form" overlayClassName="lg-overlay" ariaHideApp={false} onRequestClose={EmailModalExit}> 
   
    <div className="form-wrapper">
    
    <h2 className="">send me an electronic message.</h2>
    <small onClick={EmailModalExit}>EXIT</small>

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
            <input className="form-control" placeholder="Inquiry.."
            name="subject" 
            type="text"
            ref={register({
                required: false
            })}
            
            />
            </div>
          
        </div>

<div className="form-item d-flex flex-column"><h4>message <span><span className={charCounterFlag ? "message-exceeded" : "message-not-exceeded"}>{charCounter}</span>/200</span></h4>
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