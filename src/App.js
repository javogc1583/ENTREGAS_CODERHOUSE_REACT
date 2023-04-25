import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido" sum="3"/>
    </div>
    
  );
}
export default App;
