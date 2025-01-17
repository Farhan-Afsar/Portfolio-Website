import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/farhan.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import CV from '../../assets/Farhan_Resume.pdf';
import { useTheme } from '../../common/Themecontext';

function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    const linkdinIcon = theme ==='light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className = {styles.Hero}
            src={HeroImg} 
            alt="Profile Pic Farhan Afsar" 
            />

            <img className = {styles.colorMode}
            src={themeIcon}
            alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>

        <div className={styles.info}>
            <h1>Farhan  
                {/* <br/>  */}  Afsar
            </h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://github.com/Farhan-Afsar" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/md-farhan-afsar/" target='_blank'>
                <img src={linkdinIcon} alt="Linkedin Icon" />
                </a>
                <a href="https://www.facebook.com/farhan.afsar.99/" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon" />
                </a>
            </span>
            <p className={styles.description}>
            Dedicated to building innovative solutions with expertise in Python JavaScript and machine learning.
            </p>
            <a href="https://drive.google.com/file/d/1pQC0HoHYoHf-XRZd8erSq5ncB8M5_qQA/view?usp=sharing" target='_blank'>
                <button className='hover'>Resume</button>
            </a>
            
        </div>
    </section>
  )
}

export default Hero;