// components/ProjectCard.tsx
import styles from './ProjectCard.module.scss'

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
      <img src={project.imageUrl} alt={project.title} />
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
