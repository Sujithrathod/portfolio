import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Background from './components/Background'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Background />
      <Nav/>
      <Home/>
    </div>
  )
}

export default App
