import './App.css'
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
const App = () => {
  return (
    <>
      <NavBar/>
      
      <ItemListContainer greeting={"Gracias por visitar GameSTORagE🎮"}/>
    </>
  )
}

export default App