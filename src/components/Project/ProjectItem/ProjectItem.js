import React,{useState} from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import { fadeInDown } from 'react-animations';
import { StyleSheet,css } from 'aphrodite';



const ProjectItem = ({title,techUsed,description,img_urls,code_link,demo_link,order}) => {

    const [projectModalState,openProjectModal] = useState(false);

    const clickDescription = () => {
        openProjectModal(true);
    }

    const styles = StyleSheet.create({
  
        fadeIn: {
            animationName: fadeInDown,
            animationDuration: '0.75s',
            animationFillMode:'both',
            animationDelay:`calc(${order} * 200ms)`
        }
      })


    // state of open modal
return  (
    

    <div id="project-item" className={css(styles.fadeIn)}>
    <h2>{title}</h2>
    <small onClick={clickDescription}>view.</small>
    <ProjectModal isOpen={projectModalState} setIsOpen={openProjectModal} title={title} techUsed={techUsed} description={description} img_urls={img_urls} code_link={code_link} demo_link={demo_link}/>
    </div>

  

);

}

export default ProjectItem;