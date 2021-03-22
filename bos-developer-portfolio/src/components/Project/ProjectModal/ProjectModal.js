import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './project-modal.css';


const ProjectModal = ({isOpen,setIsOpen,title,techUsed}) => {


    const ProjectModalExit= () => {
        setIsOpen(false);
    }

 
   const tused = techUsed;
   console.log(tused);
    const [tUsed,setTUsed]= useState(<div><span></span></div>);

    useEffect(() => {
        if (tused !== undefined) {
            const listitems = tused.map((tech,index) => <div className="technology-item" key={index}><span>{tech}</span></div>);
            setTUsed(listitems);
        }
    },[])







    return (
    <Modal
    isOpen={isOpen}
    overlayClassName="prj-modal-ovl"
    className="project-modal-container"
    ariaHideApp={false}
    onRequestClose={ProjectModalExit}
    >
    <small className="prj-exit" onClick={ProjectModalExit}>EXIT</small>

    <div className="project-main-container">
        <div className="flex-item">
            <h2>{title}</h2>
            <h2 className="mt-5">DESCRIPTION</h2>
            <p>lorem ipsum dolor sit am.long, sed diam lorem orem ipsum dolor sit am.long, sed diam lorem orem ipsum dolor sit am.long, sed diam lorem orem ipsum dolor sit am.long, sed diam lorem</p>
            <h2 className="mt-5">TECHNOLOGY USED</h2>
            <div className="technologies-container">     
            {tUsed}
            </div>
        </div>
        <div className="flex-item">
        <h2>SC</h2>   
        </div>
    </div>

    </Modal>);

}

export default ProjectModal;