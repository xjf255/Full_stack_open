import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdotePoints = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotePoints)
  const [important, setImportant] = useState(0)

  useEffect(() => {
    const index = points.findIndex(el => el === Math.max(...points))
    if (index === -1) return
    setImportant(index)
  }, [points])

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => {
        const newPoints = [...points]
        newPoints[selected] += 1
        setPoints(newPoints)
      }}>vote</button>
      <button onClick={() => setSelected(Math.round(Math.random() * (anecdotes.length - 1)))}>next anecdote</button>
      {points[important] !== 0 && <>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[important]}</p>
        <p>has {points[important]} votes</p>
      </>}
    </div>
  )
}

export default App