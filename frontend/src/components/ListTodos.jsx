import { useState, useEffect } from "react"

const ListTodos = () => {
    const [todos, setTodos] = useState([])
    useEffect(
        () => {
            const getTodos = async () => {
                try {
                    const fetched = await fetch("http://localhost:5000/todos")
                    const body = await fetched.json()
                    setTodos(body)
                } catch (err) {
                    console.error(err.message)
                }
            };
            getTodos()
        }, []
    )

    return (
        <>
            <div className="border-gray-200 border-2">
                <table className="table-fixed w-full px-4">
                    <thead>
                        <tr>
                            <th className="w-[10vw]">S/N</th>
                            <th className="w-[90vw]">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 ? todos.map(
                            (todo) => (
                                <tr key={todo.todo_id} className=" bg-yellow-400  rounded-xl my-4">
                                    <td className="text-xl text-center">{todo.todo_id}</td>
                                    <td className="flex justify-between items-center mr-6">
                                    <span className="text-xl">{todo.description}</span>
                                    <div className=" inline-flex space-x-2">
                                        <button>&#10003;</button>
                                        <button>&#10005;</button>
                                    </div>

                                    </td>
                                </tr>
                            )) : <tr><td colSpan="3">No todos</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListTodos;