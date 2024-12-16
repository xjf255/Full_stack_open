import express, { json } from "express"
import morgan from "morgan"
import cors from "cors"
import phoneBooks from "./mocks/list.json" with {type: 'json'}

const app = express()
app.use(morgan('tiny'))
app.use(json())
app.use(cors())
app.disable('x-powered-by')
const PORT = process.env.PORT || 3001

app.get('/api/persons', (req, res) => {
  res.json(phoneBooks)
})

app.get('/info', (req, res) => {
  const allInfo = phoneBooks.length
  const date = new Date()
  res.send(`<p>Phonebook has info for ${allInfo} people <br/> ${date}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const phone = phoneBooks.find(el => el.id === +id)
  if (phone) {
    return res.json(phone)
  }
  res.status(404).json({ message: 'Not found a phone' })
})

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body
  if (name || number) {
    const isNew = phoneBooks.some(person => person.name === name)
    if (isNew) return res.json({ message: `${name} is an existing user` })
    const id = phoneBooks.length + 1
    const newPhone = { id, name, number }
    phoneBooks.push(newPhone)
    return res.json(newPhone)
  }
  return res.json({ message: 'Error' }).status(400)
})

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const indexPhone = phoneBooks.findIndex(el => el.id === +id)
  if (indexPhone === -1) {
    return res.json({ message: 'Not found a phone' }).status(404)
  }
  phoneBooks.splice(indexPhone, 1)
  console.log(phoneBooks)
  return res.json({ message: 'deleted phone' }).status(204)
})

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
})  