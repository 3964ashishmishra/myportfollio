import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/">
           <Home/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/services">
            <Service/>
          </Route>

          <Route exact path="/projects">
            <Projects/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
