import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './components/users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Users />
    </div>
  )
}

export default App
