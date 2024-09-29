// components/SkillsSection.tsx

import styles from './SkillsSection.module.scss'

const SkillsSection = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.sectionTitle}>Skills</h3>
      <div className={styles.skillCategories}>
        {/* Technical Skills */}
        <div className={styles.skillCategory}>
          <h4 className={styles.categoryTitle}>Technical Skills</h4>
          <ul className={styles.skillList}>
            <li>TypeScript & JavaScript</li>
            <li>React & React Native</li>
            <li>node.js</li>
            <li>Next.js/Remix</li>
            <li>GraphQL & Apollo</li>
            <li>Microservice Architectures</li>
            <li>Agile Methodologies & SDLC</li>
            <li>CSS Modules & SASS</li>
            <li>RESTful API Services</li>
            <li>UX/UI Design Principles</li>
            <li>E2E, Functional & Unit Testing</li>
            <li>SQL & NoSQL Databases</li>
            <li>Database & Schema Design</li>
            <li>AWS Architecture</li>
          </ul>
        </div>

        {/* Leadership & Management */}
        <div className={styles.skillCategory}>
          <h4 className={styles.categoryTitle}>Leadership & Management</h4>
          <ul className={styles.skillList}>
            <li>Team Leadership & Mentorship</li>
            <li>Project Management</li>
            <li>Strategic Planning</li>
            <li>Resource Allocation</li>
            <li>Cross-Functional Collaboration</li>
            <li>Radical Candor Communication</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
