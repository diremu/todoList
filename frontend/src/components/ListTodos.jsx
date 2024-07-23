import { useState, useEffect } from "react"

const ListTodos = async () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const fetched = await fetch("http://localhost:5000/todos")
            const body = await fetched.json()
            setTodos(body)
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => { getTodos() }, [])
    console.log(todos)

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            (todo) => (
                                <tr key={todo.todo_id}>
                                    <td>{todo.description}</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListTodos;