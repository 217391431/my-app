import logo from './logo.svg';
import Navbar from './Components/Navbar ';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
   <div>
  <Navbar/>
  <main>
  <Home/>
  <About/>
  <Projects/>
  <Contact/>
  </main>
<Footer/>
   </div>
  );
}

export default App;
