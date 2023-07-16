import { useParams } from "react-router-dom"
import {useQuery} from '@apollo/client'
import { GET_PROJECT } from "../graphql/projects"
import { TaskList } from "../components/tasks/TaskList"
import { TaskForm } from "../components/tasks/TaskForm"


export default function ProjectDetails() {

  const params = useParams()
  const {data, loading, error} = useQuery(GET_PROJECT,{
    variables: {
      id: params.id
    }
  })
  if(loading) return <p>Cargando</p>
  if(error) return <p>Error</p>
  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>
        Delete
      </button>
      <TaskForm/>
      <TaskList tasks={data.project.tasks}/>
    </div>
  )
}
