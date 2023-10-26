import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
import './App.css'
import './estilos/style.css'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "Main"/>
    </>
  );
}

export default App;
