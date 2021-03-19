import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';



const ProjectItem = ({title}) => {

    const [projectModalState,openProjectModal] = useState(false);


    // state of open modal
return  (
    <div className="project-item"><h2>{title}</h2>
    <small>description.</small>
    </div>

);

}

export default ProjectItem;