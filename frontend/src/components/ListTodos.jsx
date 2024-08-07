import { useState, useEffect } from "react"
import { editTodo} from "./EditTodos"

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
            <div className="border-gray-200 border-t-2">
                <table className="table-auto w-full px-4">
                    <thead>
                        <tr>
                            <th className="w-[10vw] font-semibold text-xl">S/N</th>
                            <th className="w-[90vw] font-semibold text-xl">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 ? todos.map(
                            (todo) => (
                                <tr key={todo.todo_id} className={`${(todo.todo_id % 2) == 0 ? `bg-yellow-400 ` : `bg-gray-400`} rounded-xl my-4 border-b-2 border-gray-200 mb-2 `}>
                                    <td className="text-xl text-center">{todo.todo_id}</td>
                                    <td className="flex justify-between items-center mr-6">
                                    <span className="text-xl">{todo.description}</span>
                                    <div className=" inline-flex space-x-4 mr-6">
                                        {/* <button className="bg-green-400 w-10 h-10 rounded-full text-white hover:bg-green-600 hover:opacity-80 transition-all " onClick={() => {
                                            completedTodo(todo.todo_id)
                                        }}>&#10003;</button> */}
                                        <button className="bg-green-400 w-10 h-10 rounded-full text-white hover:bg-green-600 hover:opacity-80 transition-all " onClick={
                                            editTodo(todo)
                                        }>&#x270E;</button>
                                        <button className="bg-red-400 w-10 h-10 rounded-full text-white hover:bg-red-600 hover:opacity-80 transition-all">&#10005;</button>
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