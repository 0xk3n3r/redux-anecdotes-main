import { createAnecdote } from '../reducers/anecdoteReducer'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers/anecdoteReducer'
import React from 'react'

const store = createStore(reducer)
const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch({ type: 'VOTE', id })
  }
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <p>{anecdote.content}</p>
          <p>Votes: {anecdote.votes}</p>
          <button onClick={() => vote(anecdote.id)}>Vote</button>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes
