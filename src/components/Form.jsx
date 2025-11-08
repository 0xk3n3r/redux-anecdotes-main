import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Form = () => {
  const dispatch = useDispatch()

  const addAnecdote = event => {
    event.preventDefault()
    console.log('Form submitted')
    const content = event.target.anecdote.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`new anecdote '${content}'`, 3000))
    event.target.anecdote.value = ''
  }

  

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default Form