import { useState } from 'react'
import ListTodos from './components/ListTodos'
import CreateTodos from './components/CreateTodos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodos />
      <ListTodos />
    </>
  )
}

export default App
