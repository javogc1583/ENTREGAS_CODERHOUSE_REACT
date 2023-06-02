import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import "./App.css"


import { ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"

import { Checkout } from "./components/Checkout/Checkout"

function App() {
  const onAdd = stock => console.log("EXISTEN EN STOCK: " + stock)
  return (
      <BrowserRouter>
      {/* Para rutas dinámicas */}
        <CartProvider> {/* El contexto envuelve a la aplicacion */}
          <NavBar />
          <Routes>
            {/* Creamos rutas */}
            <Route path="/" element={<ItemListContainer greeting="Productos" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Productos" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/item/:id" element={<ItemDetailContainer onAdd={onAdd}  />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App;
