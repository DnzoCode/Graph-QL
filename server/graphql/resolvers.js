import Project from "../models/Project.js"

export const resolver = {
    Query: {
        hello: () => "Hello World"
    },
    Mutation:{
        createProject: async (_, {name, description}) => {
            const project = new Project({
                name,
                description
            })
            const saveProject = await project.save()
            return saveProject
        }
    }
}