import { useState } from 'react'
import ListTodos from './components/ListTodos'
import CreateTodos from './components/CreateTodos'
import './App.css'

function App() {

  return (
    <div className='bg-gradient-to-b from-red-200 to-green-300 h-[100vh]'>
      <CreateTodos />
      <ListTodos />
    </div>
  )
}

export default App
