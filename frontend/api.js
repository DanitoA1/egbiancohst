import axios from 'axios'

const getExample = () => {
    const data = {
        query: `
            query {
                notes{
                    id
                    title
                    description
                }
            }
        `,
    }
    return helper(data)
}

const addExample = ({ title, description }) => {
    const data = {
        query: `
            mutation {
                addNote(title:"${title}", description:"${description}"){
                    id
                    title
                    description
                }
            }
        `,
    }
    return helper(data)
}

const deleteExample = (id) => {
    const data = {
        query: `
            mutation{
                deleteNote(id:"${id}")
            }
        `
    }
    return helper(data)
}

const editExample = (note) => {
    const data = {
        query: `
            mutation{
                editNote(id:"${note.id}", title:"${note.title}", description:"${note.description}"){
                    id
                    title
                    description
                }
            }
        `
    }
    return helper(data)
}

const helper = (data) => {
    return axios({
        url: `${process.env.baseUrl}/graphql`,
        method: 'post',
        data
    })
}

export { getExample, addExample, deleteExample, editExample }