import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import Registro from './pages/registrarse';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" exact element={<Home/>} />
          <Route path="/Registro" exact element={<Registro/>} />


        </Routes>
        <Contact/>
      </Router>
    </div>
    
  );
}

export default App;
