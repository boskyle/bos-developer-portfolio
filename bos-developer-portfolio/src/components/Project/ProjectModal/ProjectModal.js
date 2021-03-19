import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './project-modal.css';


const ProjectModal = ({isOpen}) => {




    return (
    <Modal
    isOpen={isOpen}
    overlayClassName="prj-modal-ovl"
    ariaHideApp={false}

    >

    </Modal>);

}

export default ProjectModal;