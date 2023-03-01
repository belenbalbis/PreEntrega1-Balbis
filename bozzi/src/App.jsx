import './App.css'
import Navbar from './components/Navbar'
import List from './components/List/List'
import CartWidget from './components/CartWidget/CartWidget'

const sale = ["15% OFF", "50% OFF", "80% OFF"]

const App = ()  => {
return (
    <div>
      <Navbar />
      <List sale={sale} />
    </div>
  )
}

export default App
