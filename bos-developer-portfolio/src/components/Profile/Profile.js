import React from 'react';
import './profile.css';
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


const Profile = () => {

    const styles = StyleSheet.create({
        stats: {
          animationName: zoomIn,
          animationDuration: '0.75s',
          padding: '1em',
          margin:'1em',
          color:'black',
          backgroundColor:'green'
        },
        summary: {
         animationName: zoomIn,
          animationDuration: '0.75s',
        },
        goal: {
            animationName: zoomIn,
             animationDuration: '0.75s',
           },
        mindset: {
            animationName: zoomIn,
            animationDuration: '0.75s',
            display:'flex',
            flexFlow:'column wrap',
            width: '75%',
            alignItems:'center'
        }
    
        
      })

    return (
        <div className="mainContainerItem">

      
            <div className={css(styles.stats)} >
            <span>
            <h3>Name:   Boswell Orendain</h3>
            <h3>Role:   FrontEnd Developer</h3>
            {/* <h3>Hobby:  Fitness</h3> */}
            </span>

            </div>


            <div className="summary-goal mt-5">
            <div className={css(styles.summary)}>
            <h3>BACKGROUND</h3>
            <p>Graduated from Humber (Institute of Applied Technology and Advanced Learning) witih an Associate's Degree in Computer Engineering. 
                Though my degree encompasses both electrical and programming; I discovered that I have a passion and enjoyed the software side of the industry.</p>
            </div>
            <div className={css(styles.goal)}><h3>AIM</h3>
            <p>I am a frontend developer with the ambition of landing a frontend/fullstack development role in a tech company where I can make a great impact on the success of the company.</p>
            </div>
            </div>

            <div className={css(styles.mindset)}>
            <h3 className="mindset">MINDSET</h3>
            <p className="display-4">When I create my UI Designs for my web applications, I put myself in the shoes of the user and go in-depth on how they would interact with the application; 
            from here ideas and creativity are made into fruition that creates a user-friendly environment.
            </p>
            </div>

        




        </div>
    );



}

export default Profile;