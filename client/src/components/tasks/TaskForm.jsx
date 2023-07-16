import { useMutation } from "@apollo/client"
import { CREATE_TASK } from "../../graphql/task"
import { useParams } from "react-router-dom"

export function TaskForm() {
    const params = useParams()
    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: ['getProject']
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createTask({
            variables: {
                title: e.target.title.value,
                projectId: params.id
            }
        })
        e.target.reset()
        e.target.title.focus()
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="" />
        <button>Add</button>
    </form>
  )
}