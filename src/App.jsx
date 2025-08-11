import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
      <Nav/>
      <Home/>
    </div>
  )
}

export default App
