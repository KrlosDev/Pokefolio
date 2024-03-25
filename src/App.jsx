import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Footer, Hero, Navbar, Works} from './components';

const App = () => {
  return (
  <BrowserRouter>
  <div className="relative z-0">
    <div>
      <Navbar />
      <Hero />
      </div>
    <About />
    <Experience />
    <Works />
    {/* <Feedbacks/> */}
    <div className="relative z-0">
      <Contact />
      </div>
  </div>
  <Footer/>
  </BrowserRouter>
  )
}
export default App
