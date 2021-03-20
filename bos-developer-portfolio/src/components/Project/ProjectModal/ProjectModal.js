import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './project-modal.css';


const ProjectModal = ({isOpen,setIsOpen,title}) => {


    const ProjectModalExit= () => {
        setIsOpen(false);
    }


    return (
    <Modal
    isOpen={isOpen}
    overlayClassName="prj-modal-ovl"
    className="project-modal-container"
    ariaHideApp={false}
    onRequestClose={ProjectModalExit}
    >
    <small className="prj-exit" onClick={ProjectModalExit}>EXIT</small>
    <h2>{title}</h2>
    </Modal>);

}

export default ProjectModal;