import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './project-modal.css';

// photo slider imports
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

// react animation libraryi with inline styles css library
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';



const styles = StyleSheet.create({
    leftSide: {
      animationName: fadeIn,
      animationDuration: '0.5s',

    },
    leftSide2: {
        animationName: fadeIn,
        animationDuration: '0.5s',
        animationDelay:'0.25s',
        animationFillMode:'both'
      },
    leftSide3: {
    animationName: fadeIn,
    animationDuration: '0.5s',
    animationDelay:'0.5s',
    animationFillMode:'both'
    },
    rightSide: {
    animationName: fadeIn,
    animationDuration: '0.5s',
    animationDelay:'0.75s',
    animationFillMode:'both'
    }
 
  })








const ProjectModal = ({isOpen,setIsOpen,title,description,techUsed,img_urls,code_link,demo_link}) => {


    const ProjectModalExit= () => {
        setIsOpen(false);
    }

 
    const tused = techUsed;
    const iurls = img_urls;
    const [tUsed,setTUsed] = useState(<div><span></span></div>);
    const [imageLinks,setLinks] = useState(<div data-src=""></div>);


    
    
    useEffect(() => {
        if (tused !== undefined) {
            const listitems = tused.map((tech,index) => <div className="technology-item" key={index}><span>{tech}</span></div>);
            setTUsed(listitems);
        }
        if (img_urls !== undefined) {
            const listItems = iurls.map((img,index) =><div data-src={img} key={index}></div>)
            setLinks(listItems);
        }
    },[])


    useEffect(() => {
        return () => {
            setLinks([]);
        }
    },[])

    console.log(imageLinks[0]);



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
            <section className={css(styles.leftSide)}>   
            <h2 className="title">{title}</h2>
            </section>

            <h2 className={css(styles.leftSide2)}>DESCRIPTION</h2>
            <p className={css(styles.leftSide2)}>{description}</p>
            <section   className={css(styles.leftSide3)} id="leftAnimation2">
            <h2 className="mt-3">TECHNOLOGY USED</h2>
            <div className="technologies-container">     
            {tUsed}
            </div>
            <div className="project-links w-75">
            <a  href={code_link} target="_blank" style={{display: "inline-block"}} className="mr-2"><h2>CODE</h2></a>
            <a  href={demo_link} target="_blank" style={{display: "inline-block"}} className="ml-2"><h2>DEMO</h2></a>
            </div>
            </section>
        </div>
        <div className="flex-item p-2">
          
            <section id="rightAnimation" className={css(styles.rightSide)}>
            <AwesomeSlider
            className="slider-container mb-5"
            animation="openAnimation"
            bullets={true}
            >
            {imageLinks}
            </AwesomeSlider>

            </section>
         
            
        </div>
    </div>

    </Modal>);

}

export default ProjectModal;