import Form from './components/Form'
import Anecdotes from './components/Anecdote'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <Form />
    </div>
  )
}

export default App