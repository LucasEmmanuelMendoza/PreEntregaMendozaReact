import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx'
import { Error404 } from './components/Error404.jsx'

import './App.css'
import './estilos/style.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/items/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
