import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    const isOnBook = persons.some(person => person.name === newName)

    if (isOnBook) return alert(`${newName} is already added to phonebook`)
    if(newName.trim() === '') return
    setPersons([...persons, { name: newName }])
    setNewName('')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input defaultValue={newName} onChange={handleChange} />
        </div>
        <div>
          <button onClick={e => handleClick(e)} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App