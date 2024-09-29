// app/about/page.tsx
import Image from 'next/image'

import Introduction from '../components/Introduction'
import PersonalInterests from '../components/PersonalInterests'

import SkillsSection from '../components/SkillsSection'
import styles from './About.module.scss'

import profilePic from '../../public/images/profile.png'

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={profilePic}
            alt='an image of Hunter!'
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
                life professionally and personally, and I know I can do more.{' '}
                <br />
                <br />
                Knowing that it makes total sense to me that if I can do awesome
                things in life then I&apos;m should just keep doing those things
                and surround myself with the best people possible to do them
                with!
              </p>
            </div>
            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>Relentless</h4>
              <p>
                I decided a long time ago that as much as possible, I can&apos;t
                allow barriers prevent me from being successful, but philosophy
                teaches us that sometimes, the obstacle is the way.
                <br />
                <br /> As such I will continue to make use of every skill and
                resource that I have along with all of the things I have learned
                during my life to work through any obstacle that I can encounter
                in order to achieve the best outcomes. <br />
                <br />I also know that sometimes working through challenges and
                obstacles means that we can look to others around when we need
                help and support and that asking (the right) questions is okay.
                It&apos;s okay to mindfully ask for help from time to time.
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
                As fortune has it, I have people in my life who are invested in
                me and believe in me. It is fair to reason then that because I
                have had such fortune in my life that I should continue to turn
                that outward using the skills and resources that I have. <br />
                <br />
                At one point in my life (for over a decade!) what being able to
                meaningfully contribute to others and make a difference looked
                like being a special education classroom teacher. Now it looks
                like building software and tools for people to get things done
                and to be part of great things themselves. The focus remains the
                same however in each: making things better for others. (Or at
                the very least trying my very best to do so.)
                <br />
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
