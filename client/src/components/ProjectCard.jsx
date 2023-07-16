import {useNavigate} from 'react-router-dom'

/* eslint-disable react/prop-types */

export function ProjectCard({ project }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/projects/${project._id}`)}
    >

        <h2>{project.name}</h2>
        <p>{project.description}</p>
    </div>
  )
}