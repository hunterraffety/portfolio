// app/projects/page.tsx
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.scss'
import endrsd from '../../public/images/endrsd.png'
import educell from '../../public/images/educell_mu.png'
import useMyTech from '../../public/images/umts_mu.png'
const description = `endrsd.com is a Lambda School Labs (8 week capstone experience) product that serves as my capstone project for my time at Lambda. Lambda School is/was our stakeholder. View our product showcase. endrsd seeks to bridge the gap between technical curriculum and career focused curriculum by solving the problem of allowing students to track and monitor their progress through the career endorsement process independently. It also provides a career coach dashboard to monitor, track, and reach out to students. My contributions to this product among a team of 9 incredibly talented engineers (6 full-stack web, 3 iOS) -- are in every area of the full-stack web application. I helped architect the front-end and back-end application through 2 product release cycles and multiple product canvases. We also developed in parallel with a fully native iOS app.`

const ProjectsPage = () => {
  const projects = [
    {
      title: 'endrsd',
      description: description,
      imageUrl: endrsd,
      link: 'https://www.youtube.com/watch?v=V7-QyGETHas&pp=ygUGZW5kcnNk',
    },
    {
      title: 'Use My Tech',
      description:
        'Use My Tech Stuff is a high-end equipment sharing marketplace. Members can rent a variety of gear from a community of equipment owners across the US. You’ll be able to choose from a diverse selection of cameras, laptops, speakers, monitors, and more in whatever city one could want.',
      imageUrl: useMyTech,
      link: 'https://github.com/yourusername/shadow-caster',
    },
    ,
    {
      title: 'Educell',
      description:
        'Educell is a platform for delivering seamless collaboration and communication tools for those who have a vested interest in positive, student centered outcomes. This was a project that was built for a stakeholder that endeavors to connect low-income communities in developing countries with a team of professionals to facilitate the learning of their student.',
      imageUrl: educell,
      link: 'https://github.com/',
    },
  ]

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project!.title}
            project={{
              ...project,
              imageUrl: project!.imageUrl.src,
              description: project!.description || '',
              title: project!.title || '',
              link: project!.link || '',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
