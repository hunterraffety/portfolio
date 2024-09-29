// components/ExperienceSection.tsx

import styles from './ExperienceSection.module.scss'

const ExperienceSection = () => {
  return (
    <div className={styles.experience}>
      <h3 className={styles.sectionTitle}>Experience</h3>

      {/* Engineering Manager */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>Engineering Manager</h4>
        <p className={styles.jobDetails}>July 2022 – September 2024</p>

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

      {/* Frontend Engineer II */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>Frontend Engineer II</h4>
        <p className={styles.jobDetails}>June 2020 – July 2022</p>

        <ul className={styles.jobResponsibilities}>
          {/* Learning Management System Development */}
          <li>
            <strong>Learning Management System Development:</strong>
            <ul>
              <li>
                Developed critical user-facing features using Next.js,
                TypeScript, GraphQL, and Apollo for a student learning
                management system serving over 50,000 active students and 300+
                faculty members at Grand Canyon Education.
              </li>
              <li>
                Enhanced platform performance with code-driven solutions,
                resulting in a 10% increase in user engagement and a 20%
                improvement in page load times.
              </li>
            </ul>
          </li>

          {/* Financial Platform for PayPal */}
          <li>
            <strong>Financial Platform for PayPal:</strong>
            <ul>
              <li>
                Built a financial platform utilizing React and Redux for complex
                subledger accounting, integrating Tableau data visualizations
                for internal use by employees at PayPal.
              </li>
              <li>
                Streamlined financial processes, reducing accounting
                reconciliation time by 20%.
              </li>
            </ul>
          </li>

          {/* Collaboration and Delivery */}
          <li>
            <strong>Collaboration and Delivery:</strong>
            <ul>
              <li>
                Collaborated with product owners and stakeholders to ensure
                on-time delivery of products, improving project completion rates
                by 15% over a 6-month period.
              </li>
              <li>
                Actively engaged in team collaboration to create scalable
                solutions from conception to production.
              </li>
            </ul>
          </li>

          {/* Technical Recruitment */}
          <li>
            <strong>Technical Recruitment:</strong>
            <ul>
              <li>
                Participated in the technical interviewing team, helping to
                recruit and onboard quality candidates, increasing team capacity
                by 25% with zero churn during tenure.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Full-Stack Web Development Team Lead */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>
          Full-Stack Web Development Team Lead
        </h4>
        <p className={styles.jobDetails}>January 2019 – August 2020</p>

        <ul className={styles.jobResponsibilities}>
          {/* Student Mentorship and Curriculum Support */}
          <li>
            <strong>Student Mentorship and Curriculum Support:</strong>
            <ul>
              <li>
                Provided daily feedback and issue resolution on all curriculum
                through Slack teams and help channels, enhancing student
                satisfaction by 25%.
              </li>
              <li>
                Delivered one-on-one coaching to improve student outcomes,
                contributing to a 30% increase in course completion rates.
              </li>
            </ul>
          </li>

          {/* Project Management */}
          <li>
            <strong>Project Management:</strong>
            <ul>
              <li>
                Led monthly build week teams as Project Manager for groups of 3
                to 5 developers, successfully completing projects on time and
                fostering teamwork.
              </li>
              <li>
                Conducted daily stand-ups to build camaraderie, share ideas, and
                track progress, enhancing team cohesion.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Information Technology Specialist */}
      <div className={styles.job}>
        <h4 className={styles.jobTitle}>Information Technology Specialist</h4>
        <p className={styles.jobDetails}>August 2018 – June 2020</p>

        <ul className={styles.jobResponsibilities}>
          {/* Technical Support and Troubleshooting */}
          <li>
            <strong>Technical Support and Troubleshooting:</strong>
            <ul>
              <li>
                Troubleshot and diagnosed technical software and hardware
                issues, achieving a 95% resolution rate and improving staff
                productivity.
              </li>
              <li>
                Implemented regular workstation updates to ensure network
                integrity and privacy, reducing security incidents by 30%.
              </li>
            </ul>
          </li>

          {/* Helpdesk Management */}
          <li>
            <strong>Helpdesk Management:</strong>
            <ul>
              <li>
                Prioritized and addressed Helpdesk tickets to resolve
                mission-critical productivity barriers, reducing average ticket
                resolution time by 50%.
              </li>
              <li>
                Managed VPN configurations to accommodate work-from-home staff
                members, enabling a seamless transition to remote work.
              </li>
            </ul>
          </li>

          {/* Team Collaboration */}
          <li>
            <strong>Team Collaboration:</strong>
            <ul>
              <li>
                Collaborated with team members to find resolutions for clients,
                donors, and staff, improving overall satisfaction rates by 10%.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExperienceSection
