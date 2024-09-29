// components/ProjectCard.tsx
import styles from './ProjectCard.module.scss'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  imageUrl: string
  link: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.imageUrl}
        alt={project.title}
        layout='responsive'
        width={500}
        height={300}
      />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target='_blank' rel='noopener noreferrer'>
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
