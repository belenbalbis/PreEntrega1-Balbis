import './App.css'
import Navbar from './components/Navbar/Navbar'
import axios from "axios"
import { useEffect, useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = ()  => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
    const res = await axios.get ("https://fakestoreapi.com/products")
    setProductos(res.data);
  }

useEffect(() => {
getProductos();
}, []);




return (
    <div>
      <Navbar />
      <h1>Tienda</h1>
      <Routes>
        <Route path= "/" element= {<Home/>} />
      </Routes>
      <Routes>
        <Route path= "/category/:id" element= {<ItemListContainer productos={productos}/>} />
      </Routes>
      <Routes>
        <Route path= "/item/:id" element= {<ItemDetailContainer productos={productos}/>} />
      </Routes>

    </div>


  )
}

export default App
