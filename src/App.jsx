import Form from './components/Form'
import Anecdotes from './components/Anecdote'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <Form />
    </div>
  )
}

export default App