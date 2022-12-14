import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Inicio from './pages/InicioS';
import Servicios from './pages/Servicios';
import Administrar from './pages/Administrar';
import AdministrarServicio from './pages/AgregarServicio';
import AdministrarSabias from './pages/AgregarSabiasQue';
import AdministrarComentarios from './pages/AdministrarComentario';
import AdministrarNoticia from './pages/AgregarNoticia';
import AdministrarCuentas from './pages/AdministrarCuentas';
import Historia from "./pages/Historia";
import Comentarios from "./pages/comentarios";
import Footer from './components/Footer';
import Axios from 'axios';
import MisionValor from './pages/Misionvalor.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Inicio" exact element={<Inicio />} />
          <Route path="/Registro" exact element={<Registro />} />
          <Route path="/Servicios" exact element={<Servicios />} />
          <Route path="/Administrar" exact element={<Administrar />} />
          <Route path="/AgregarServicio" exact element={<AdministrarServicio />} />
          <Route path="/AgregarSabiasQue" exact element={<AdministrarSabias />} />
          <Route path="/AdministrarComentario" exact element={<AdministrarComentarios />} />
          <Route path="/AgregarNoticia" exact element={<AdministrarNoticia />} />
          <Route path="/Administrar/Cuentas" exact element={<AdministrarCuentas />} />
          <Route path="/Historia" exact element={<Historia />} />
          <Route path="/Misionvalor" exact element={<MisionValor/>} />
          <Route path="/Comentarios" exact element={<Comentarios/>} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
