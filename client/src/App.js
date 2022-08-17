import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import Registro from './pages/registrarse';
import Servicios from './pages/Servicios';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" exact element={<Home/>} />
          <Route path="/Registro" exact element={<Registro/>} />
          <Route path="/Servicios" exact element={<Servicios/>} />

        </Routes>
        <Contact/>
      </Router>
    </div>
    
  );
}

export default App;
