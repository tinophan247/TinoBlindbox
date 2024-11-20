import { Route, Routes } from "react-router-dom"
import AdminLayout from "./component/AdminLayout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout/>}/>

      </Routes>
    </>
  )
}

export default App