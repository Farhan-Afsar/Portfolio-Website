import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/Themecontext'

function Skills() {

    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
   <section id= 'skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill='HTML' />
            <SkillList src = {checkMarkIcon} skill='CSS' />
            <SkillList src = {checkMarkIcon} skill='JavaScript' />
            <SkillList src = {checkMarkIcon} skill='Python' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill='C' />
            <SkillList src = {checkMarkIcon} skill='C++' />
            <SkillList src = {checkMarkIcon} skill='Django' />
            <SkillList src = {checkMarkIcon} skill='DSA' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src = {checkMarkIcon} skill='Git' />
            <SkillList src = {checkMarkIcon} skill='Github' />
            <SkillList src = {checkMarkIcon} skill='Node Js' />
            <SkillList src = {checkMarkIcon} skill='Machine Learning' />
            
        </div>
        
   </section>
  );
}

export default Skills