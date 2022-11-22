//Components imports 
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Service from './components/service/service';
import Contact from './components/contact/contact';

//React imports 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import './index.css';

//images imports

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="home">
            <Home/>
            <About/>
            <Experience/>
            <Service/>
            <Portfolio/>
            <Contact/>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;