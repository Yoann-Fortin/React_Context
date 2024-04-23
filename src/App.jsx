import './App.css'
import Grandpa from './Grandpa'
import { MoodProvider } from './context/MoodContext'

function App() {

  return (
    <>
      <h1>Context</h1>
      <MoodProvider>
        <Grandpa />
      </MoodProvider>
    </>
  )
}

export default App
