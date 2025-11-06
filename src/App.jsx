import { Provider, useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/anecdoteReducer'
import React from 'react'
import Form from './components/Form'

const store = createStore(reducer)

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  const vote = (id) => {
    dispatch({ type: 'VOTE', id })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <Form />
    </div>
  )
}

export default App