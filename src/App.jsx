import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Developer from "./pages/Developer"
import Games from "./pages/Games"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
              <Route path="/category/developer" element={<Developer />} />
                    <Route path="/category/developer/result" element={<Games/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
