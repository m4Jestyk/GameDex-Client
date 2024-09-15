import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Developer from "./pages/Developer"
import Games from "./pages/Games"
import Franchise from "./pages/Franchise"
import Genre from "./pages/Genre"
import Retro from "./pages/Retro"
import Custom from "./pages/Custom"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
              <Route path="/category/developer" element={<Developer />} />
                    <Route path="/category/developer/result" element={<Games/>}/>
              <Route path="/category/franchise" element={<Franchise />} />
                    <Route path="/category/franchise/result" element={<Games/>}/>
              <Route path="/category/genre" element={<Genre />} />
                    <Route path="/category/genre/result" element={<Games/>}/>
              <Route path="/category/retro" element={<Retro/>}/>
              <Route path="/category/customfind" element={<Custom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
