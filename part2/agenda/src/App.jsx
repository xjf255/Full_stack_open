import { useEffect, useState } from 'react'
import { getAll } from './api'
import './app.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [messageError, setMessageError] = useState(null)

  const addMessageError = (message) => {
    setMessageError(message)

    setTimeout(() => {
      setMessageError(null)
    },5000)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const isOnBook = persons.some(person => person.name === newName)

    if (isOnBook) return addMessageError(`${newName} is already added to phonebook`)
    if (newName.trim() === '') return addMessageError(`fill all the fields`)
    setPersons([...persons, { name: newName }])
    setNewName('')
    addMessageError("added success")
  }

  console.log(messageError)

  const handleChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleDelete = (id) => {
    const phoneIndex = persons.findIndex(person => person.id === id)
    const isConfirm = confirm(`Delete ${persons[phoneIndex].name}?`)
    console.log(isConfirm)
  }

  useEffect(() => {
    const fetchPersons = async () => {
      const persons = await getAll();
      setPersons(persons)
    };
    fetchPersons();
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <label>
          filter shown with
          <input type="text" />
        </label>
        <h2>add new</h2>
        <div>
          name: <input defaultValue={newName} onChange={handleChange} />
          <Notification message={messageError} />
        </div>
        <div>
          <button onClick={e => handleClick(e)} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>{person.name} <button onClick={() => handleDelete(person.id)}>delete</button> </p>)}
    </div>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

export default App