// app/about/page.tsx
import Image from 'next/image'
import styles from './About.module.scss'
import profilePic from '../../public/images/profile.png'
import SkillsSection from '../components/SkillsSection'
import Introduction from '../components/Introduction'

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
          {/* Inspirational Statements Section */}
          <div className={styles.inspirationalSections}>
            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>Philosophy</h4>
              <p>
                I woke up today a better person than when I woke up yesterday.
                That doesn&apos;t mean that I don&apos;t have a relentless drive
                to become better today though. I am pretty great, but I know I
                can do more. It makes sense to me that if I can do amazing
                things in life, I&apos;m just going to go ahead and do those
                things.
              </p>
              <h4 className={styles.inspirationalTitle}>Relentless</h4>
            </div>

            <div className={styles.inspirationalBlock}>
              <p>
                I decided a long time ago that I can&apos;t allow barriers
                prevent me from being successful. I&apos;m going to make use of every
                skill and resource that I have along with all of the things I
                have learned during my life to find success. I&apos;ll also look
                to others around me when I need help and support. It&apos;s okay
                to mindfully ask for help from time to time.
              </p>
              <h4 className={styles.inspirationalTitle}>
                A Champion of Others
              </h4>
            </div>

            <div className={styles.inspirationalBlock}>
              <p>
                Nobody in life achieves anything great without the help of
                someone else. I know that I haven&apos;t. I have people who are
                invested in me and believe in me. I was a Special Education
                teacher and co-taught secondary and high school mathematics -- I
                gave my all every day. I want to give back to others in any way
                I am capable of.
              </p>
            </div>
          </div>
          {/* Technical Skills Section */}
          <SkillsSection />
        </div>
      </div>
    </section>
  )
}
