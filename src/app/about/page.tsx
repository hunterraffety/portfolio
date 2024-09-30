// app/about/page.tsx
import Image from 'next/image'

import Introduction from '../components/Introduction'
import PersonalInterests from '../components/PersonalInterests'

import SkillsSection from '../components/SkillsSection'
import styles from './About.module.scss'

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/profile.png'}
            alt='an image of Hunter!'
            width={300}
            height={1000}
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
                Ideally each morning I wake up a little bit better a person than
                the day prior. It&apos;s a good pursuit and it&apos;s good to
                have a continued (and somewhat tenacious!) drive to become
                better each day and I am grateful to strive for that.
                <br />
                <br />
                In my life I&apos;ve been fortunate enough to do some neat
                things, see some cool places, and do interesting things for
                work. Sometimes I feel like you don&apos;t as often hear about
                all the talented and creative people we get to work with
                throughout our lives, but I&apos;ve worked with some really
                great folks. It remains exciting as ever to know that I can do
                more and that the only limit to doing more is my ability to
                continue growing and learning new things and working with others
                to do great things. In other words, there aren&apos;t a whole
                lot of limits! <br />
                <br />
                Having said that, it makes a whole lot of sense to me that if I
                keep doing these things and building things that make
                people&apos;s lives better, that I should (and will) continue to
                learn and grow and that I should (and will) strive to continue
                to be surrounded by people who want to do the same. That&apos;s
                a pretty amazing way to live life.{' '}
              </p>
            </div>
            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>Relentless</h4>
              <p>
                I decided a long time ago that as much as possible, I can&apos;t
                allow barriers to prevent me from being successful, but
                philosophy teaches us that sometimes, the obstacle is the way.
                <br />
                <br /> As such I will continue to make use of every skill and
                resource that I have along with all of the things I have learned
                during my life to work through any obstacle that I encounter in
                order to achieve the best outcomes possible. <br />
                <br />I also know that sometimes working through challenges and
                obstacles means that we look to others around us when we seek
                guidance and support and that asking thoughtful questions is
                okay. It&apos;s okay to mindfully ask for help from time to
                time.
              </p>
            </div>
            <div className={styles.inspirationalBlock}>
              <h4 className={styles.inspirationalTitle}>
                A Champion of Others
              </h4>
              <p>
                I pretty firmly believe seldom few in this world are able to
                achieve greatness on their own or achieve great things without
                the help of others. It happens, to be sure. In my case however I
                know that I haven&apos;t. <br />
                <br />
                As fortune has it I have people in my life who are invested in
                me and believe in me. It is fair to reason then that because I
                have had such fortune in my life that I should continue to turn
                that outward using the skills and resources that I have in order
                to make things better for the world at large, but my community,
                family, friends and those I work with and for. <br />
                <br />
                At one point in my life (for over a decade!) what being able to
                meaningfully contribute to others and make a difference looked
                like -- was being a special education classroom teacher. Now it
                looks like building software and tools for people to get things
                done and to be part of great things themselves.
                <br />
                <br />
                The focus remains the same however in each: making the world we
                live in better for others. (Or at the very least trying my very
                best to do so.)
                <br />
                <br />
                It is very much possible to do real, impactful work through
                reaching users via keyboards and compelx code and crafting,
                building, and implementing awesome user experiences and working
                with a team of empowered peers to that end. It&apos;s an
                incredibly rewarding experience that very much services the
                community and world at large.
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
