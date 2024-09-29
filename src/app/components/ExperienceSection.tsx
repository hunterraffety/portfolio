// components/ExperienceSection.tsx

import styles from './ExperienceSection.module.scss'

const ExperienceSection = () => {
  return (
    <div className={styles.experience}>
      <h3 className={styles.sectionTitle}>Experience</h3>

      {/* AURA / BOSTON, MA | July 2022 – September 2024 */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>Engineering Manager</h4>
        <p className={styles.jobDetails}>
          AURA / Boston, MA | July 2022 – September 2024
        </p>

        <ul className={styles.jobResponsibilities}>
          {/* Growth and Acquisition Leadership and Management */}
          <li>
            <strong>Growth and Acquisition Leadership:</strong>
            <ul>
              <li>
                Led a team of 4 engineers, fostering Radical Candor culture.
              </li>
              <li>Implemented agile methodologies, enhancing productivity.</li>
              <li>Managed resource allocation and project timelines.</li>
              <li>Mentored team through regular one-on-ones.</li>
              <li>Presented weekly updates to stakeholders.</li>
            </ul>
          </li>

          {/* Enrollment Engineering DRI */}
          <li>
            <strong>Enrollment Engineering DRI:</strong>
            <ul>
              <li>Optimized user enrollment workflows across platforms.</li>
              <li>Achieved 11% MoM growth in user enrollments.</li>
              <li>Enhanced AoV by 15% through user testing.</li>
              <li>Aligned enrollment strategies with business objectives.</li>
            </ul>
          </li>

          {/* Strategic Initiatives */}
          <li>
            <strong>Strategic Initiatives:</strong>
            <ul>
              <li>Integrated new technologies for system scalability.</li>
              <li>Led projects improving user engagement.</li>
              <li>Applied Radical Candor for problem-solving.</li>
              <li>Monitored industry trends to inform development.</li>
            </ul>
          </li>

          {/* Internationalization Expansion */}
          <li>
            <strong>Internationalization Expansion:</strong>
            <ul>
              <li>Led expansion support to Canada, delivered to production.</li>
              <li>Facilitated knowledge transfer for legal requisites.</li>
            </ul>
          </li>

          {/* Accessibility Compliance Audit */}
          <li>
            <strong>Accessibility Compliance Audit:</strong>
            <ul>
              <li>Directed refactoring for WCAG 2.2 compliance.</li>
              <li>Passed two large-scale accessibility audits.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Full Stack Engineer */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>Full Stack Engineer</h4>
        <p className={styles.jobDetails}>
          AURA / Boston, MA | July 2019 – July 2022
        </p>

        <ul className={styles.jobResponsibilities}>
          {/* Transition to Leadership */}
          <li>
            <strong>Transition to Leadership:</strong>
            <ul>
              <li>Led smaller projects, demonstrating leadership potential.</li>
              <li>Facilitated knowledge transfer and code reviews.</li>
            </ul>
          </li>

          {/* Financial Transaction Monitoring User Flow */}
          <li>
            <strong>Financial Transaction Monitoring:</strong>
            <ul>
              <li>Designed and developed user enrollment processes.</li>
              <li>Implemented features enhancing user security.</li>
              <li>Increased feature adoption by 20% over six months.</li>
            </ul>
          </li>

          {/* Microservices Refactoring and Development */}
          <li>
            <strong>Microservices Refactoring:</strong>
            <ul>
              <li>
                Refactored monolithic Java codebase to Node.js microservices.
              </li>
              <li>Enhanced integration with third-party credit bureaus.</li>
              <li>Contributed to project "Fusion," improving scalability.</li>
            </ul>
          </li>

          {/* Enhanced Alert Service Implementation */}
          <li>
            <strong>Enhanced Alert Service:</strong>
            <ul>
              <li>Developed Alert Service assessing impact and severity.</li>
              <li>Unified information flows across client applications.</li>
              <li>
                Introduced severity considerations to improve responsiveness.
              </li>
            </ul>
          </li>

          {/* Unusual Transaction Detection Feature */}
          <li>
            <strong>Unusual Transaction Detection:</strong>
            <ul>
              <li>Led development from grooming to deployment.</li>
              <li>
                Integrated ML-generated risk scores for intelligent alerts.
              </li>
              <li>Feature highlighted on CBS's "60 Minutes."</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExperienceSection
