
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')                 //get request fron url
      .then((res) => {
        setjokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <p>jokes: {jokes.length}</p>           {/* to show size */}
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>

          </div>
        ))
      }
    </>
  )
}

export default App
