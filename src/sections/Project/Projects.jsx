import styles from './ProjectsStyles.module.css'
import heart from '../../assets/heart.jpg'
import ProjectCard from '../../common/ProjectCard'
import train from '../../assets/train.jpg'
import music from '../../assets/music.jpg'
import type from '../../assets/type.jpg'

function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={heart} 
                link='https://github.com/Farhan-Afsar/Cardiovascular-Disease-Prediction-System-and-Visualization'
                h3='Machine Learining'
                // p = 'Cardiovascular Disease Prediction and Visualization'
           />

            <ProjectCard src={train} 
                link='https://github.com/Farhan-Afsar/Railway-System'
                h3='Train Management'
                // p = 'Railway Ticket Booking System'
           />

            <ProjectCard src={music} 
                link='https://github.com/Farhan-Afsar/Music'
                h3='Music Player'
                // p = 'Control Music - Flutter App'
           />

            <ProjectCard src={type} 
                link='https://github.com/Farhan-Afsar/Typing-Test'
                h3='Typo'
                // p = 'Test Your Typing Speed'
           />


        </div>
    </section>
  )
}

export default Projects