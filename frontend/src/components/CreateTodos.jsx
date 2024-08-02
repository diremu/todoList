import { useState, useEffect } from "react"

const CreateTodos = () => {
    const [description, setDescription] = useState('')
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentTodo = todos.length + 1
        console.log(description)
        try {
            const response = await fetch("http://localhost:5000/todos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ description, id: currentTodo })
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Success:", data);
            window.location.reload(); // Reload the window
        } catch(err) {
            console.error(err.message)
        }
    }

    return (
        <div className="mb-6 flex flex-col items-center">
            <div>
                <h3 className="text-[1.4rem]">What next?</h3>
            </div>
            <div>
                <input type="text" id="description" className="border-2 w-[50vw] h-[5vh]" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="ml-4 bg-green-300 py-2 px-3 rounded-xl hover:bg-green-600 hover:text-white transition-all" onClick={handleSubmit}>Add to List</button>
            </div>
        </div>
    )
}

export default CreateTodos;