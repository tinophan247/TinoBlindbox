import { Route, Routes } from "react-router-dom"
import Dasboard from "./pages/AdminSite/Dashboard/Dasboard"
import Product from "./pages/AdminSite/Product/Product"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dasboard/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App