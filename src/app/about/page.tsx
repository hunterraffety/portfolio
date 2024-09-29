// app/about/page.tsx
import Image from 'next/image'
import styles from './About.module.scss'
import profilePic from '../../public/images/profile.png'
import SkillsSection from '../components/SkillsSection'
import Introduction from '../components/Introduction'
import PersonalInterests from '../components/PersonalInterests'

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={profilePic}
            alt='Hunter!'
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContent}>
          {/* Introduction Section */}
          <Introduction />
          {/* Technical Skills Section */}
          <SkillsSection />
          {/* Inspirational Statements Section */}
          <div className={styles.inspirationalSections}>
            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>Philosophy</h4>
              <p>
                I woke up today hopefully a little bit better of a person than
                yesterday. Having said that however, it doesn&apos;t mean that I
                don&apos;t have a relentless drive to become better today.
                <br />
                <br />
                I&apos;ve been able to do and see and build some neat things in
                life professionally and personally, but I know I can do more.{' '}
                <br />
                <br />
                It makes sense to me then that if I can do awesome things in
                life, I&apos;m just going to go ahead and do those things and
                surround myself with the best people possible to do it with!
              </p>
            </div>

            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>Relentless</h4>
              <p>
                I decided a long time ago that as much as possible, I can&apos;t
                allow barriers prevent me from being successful, but philosophy
                says that sometimes the obstacle is the way.
                <br />
                <br /> I&apos;m going to make use of every skill and resource
                that I have along with all of the things I have learned during
                my life to break down any obstacle in my way to achieve an
                outcome. <br />
                <br />
                It&apos;s important that I recognize that I can look to others
                around me when I need help and support. It&apos;s okay to
                mindfully ask for help from time to time.
              </p>
            </div>

            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>
                A Champion of Others
              </h4>
              <p>
                I pretty firmly believe that very few in this world are able to
                achieve greatness or great things without the help of others. I
                know that I haven&apos;t. <br />
                <br />
                Luckily however I have had (have) people in my life who are
                invested in me and believe in me. It is fair to reason then that
                because I have had such fortune in my life that I should
                continue to turn that outward using the skills and resources
                that I have. <br />
                <br />
                At one point in my life it looked like being a special education
                classroom teacher (for over a decade!) and now it looks like
                building software and tools for people to get things done and to
                be part of great things themselves. <br />
                <br />
                It is very much possible to do real, impactful work through
                reaching users via keyboard and code and building awesome user
                experiences and working with a team of empowered peers.
                It&apos;s an incredibly rewarding experience that very much
                services the community and world at large.
                <br />
                <br />
                If I&apos;m able to proliferate neat things and excitement into
                the world through creativity, a passion for growth, and choosing
                to be fascinated, then it only makes sense to help others do the
                same, because it&apos;s pretty amazing.
              </p>
            </div>
          </div>
          {/* Personal Interests Section */}
          <PersonalInterests />
        </div>
      </div>
    </section>
  )
}
