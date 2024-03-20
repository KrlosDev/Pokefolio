import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import { BrowserRouter } from "react-router-dom";
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <div className="sections-Wrapper">
    <Hero/>
    </div>
    </BrowserRouter>
  )
}

export default App
