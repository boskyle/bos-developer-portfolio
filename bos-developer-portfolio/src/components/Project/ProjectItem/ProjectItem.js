import React,{useState,useEffect} from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';




const ProjectItem = ({title,techUsed,description,img_urls}) => {

    const [projectModalState,openProjectModal] = useState(false);

    const clickDescription = () => {
        openProjectModal(true);
    }

    // state of open modal
return  (
    <div className="project-item"><h2>{title}</h2>
    <small onClick={clickDescription}>view.</small>
    <ProjectModal isOpen={projectModalState} setIsOpen={openProjectModal} title={title} techUsed={techUsed} description={description} img_urls={img_urls}/>
    </div>

);

}

export default ProjectItem;