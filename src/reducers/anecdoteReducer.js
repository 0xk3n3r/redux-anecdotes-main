import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

/*
const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const initialState = anecdotesAtStart.map(asObject)
*/

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      const anecdote = state.find(n => n.id === id)
      if (anecdote) {
        anecdote.votes += 1
        console.log(current(state))
      }
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, vote, setAnecdotes } = anecdotesSlice.actions
export default anecdotesSlice.reducer